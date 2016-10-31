     /**
        游戏规则：
          一个玩家、两个色子，每个色子有1-6个点，点数随机出现，点数是2-12中的任意数字
          如果玩家第一次抛出 7 或者 11，则本回合胜利 进行下一回合
          如果玩家抛出2、3、12 则回合失败 进行下一回合
          抛出其他数字4、5、6、7、8、9、10 记录点数和，并继续掷色子
          当玩家掷出7 则本回合失败 进行下一回合
          当玩家抛出的点数和与上一次的相同，本局胜利 进行下一回合
          当玩家抛出的点数和与上一次的不同，本局失败，进行下一回合
             
        game:{游戏对象
             
        }
        Stage={场景对象
          add(thing) //添加一个物件
          addEvent(type,handler)
          redraw() //重绘所有thing对象
        }
        Thing = {//物件对象
          draw(canvas)//传入一个canvas画板对象用于绘制thing
          isScope(x,y) //传入鼠标相对于canvas的位置，返回boolean，
                 //用于判断鼠标是否在thing的范围 true在，false不在
          addEvent(type,handler) //公开方法 //给物件设置时间
        }
           
        定义我们自己的场景对象
        掷色子的场景内需要：
          1、两个色子 色子一号 色子二号
          2、一个公告板 显示本局信息
          3、三个按钮 重现开始 
      **/
         
      function Stage(canvas){
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'rgb(255,0,0)';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.things = [];
        this.addEvent = [];
        this.rule = {};
      }
      Stage.prototype.setings = function(){};
      Stage.prototype.draw = function(){
        for(var thing in this.things){
          if(this.things[thing] instanceof Array){
            for(var i=0;i<this.things[thing].length;i++){
              this.things[thing][i].init();
            }
          }
        }
      }
      Stage.prototype.add = function(thing){
        if(!thing){return;}
        if(this.things['disc'] == undefined){
          this.things['disc'] = [];
        }
        if(this.things['callBoard'] == undefined){
          this.things['callBoard'] = [];
        }
        if(thing instanceof Disc){
          this.things['disc'].push(thing);
        }
        if(thing instanceof CallBoard){
          this.things['callBoard'].push(thing);
        }
      }
      Stage.prototype.play = function(){
        this.clean();
        for(var i=0;i<this.things['disc'].length;i++){
          this.things['disc'][i].random_porints();
        }
        this.rule.init(this);
        this.rule.run();
        this.log();
        if(!this.rule.hasNext){
          var self = this;
          document.getElementById('button').onclick = function(){
            self.redraw();
          }
          document.getElementById('button').value = '重置游戏';
        }else{
          document.getElementById('button').value = '再抛一次';
        }
      }
      Stage.prototype.redraw = function(){
        this.clean();
        this.things = {};
        this.setings();
        var self = this;
        document.getElementById('button').onclick = function(){
          self.play();
        }
        document.getElementById('button').value = '开始掷骰子';
      }
      Stage.prototype.log = function(){
        var html = document.getElementById('log').innerHTML;
        var tmp = this.rule.notice1.str +' '+ this.rule.notice2.str +' '+ this.rule.notice3.str +'  ';
        tmp += (this.rule.integral.length > 0 ? ('上一次点数[<font color="red">'+this.rule.integral.join(',')+'</font>]'):'')+this.rule.hasNext+'<br/>';
        document.getElementById('log').innerHTML = html + tmp;
      }
      Stage.prototype.clean = function(){
        for(var i=0;i<this.things['disc'].length;i++){
          this.things['disc'][i].clean();
        }
        for(var i=0;i<this.things['callBoard'].length;i++){
          this.things['callBoard'][i].clean();
        }
      }
      function Disc(x,y,stage){
        this.x = x;
        this.y = y;
        this.stage = stage;
        this.init();
      }
      Disc.prototype.init = function(){
        this.width = 170;
        this.height = this.width;
        this.porints = 1;
        this.draw();
        this.draw_porints();
      }
      Disc.prototype.draw = function(){
        this.stage.ctx.beginPath();
        this.stage.ctx.strokeRect(this.x,this.y,this.width,this.height);
        this.stage.ctx.closePath();
        this.stage.ctx.stroke();
      }
         
      Disc.prototype.random_porints = function(){
        this.clean();
        var tmp = 0;
        do{
          tmp = Math.floor(Math.random() * 7);
        }while(tmp <= 0 || tmp > 6)
        this.porints = tmp;
        this.draw_porints();
      }
      Disc.prototype.draw_porints = function(){
        var radius = this.width/7;
        if(this.porints == 1){//当只有1个点的时候，点位于正方形的正中间(width/2,height/2) 半径为width/4
          draw_porint(this.x + (this.width/2),this.y + (this.height/2),this.width/4,this.stage);
        }else if(this.porints == 2){//当有两个点时，第一个点位于(width/2,(height/7)*2,第二个点位于(width/2,(height/7)*5)
          draw_porint(this.x + (this.width/2),this.y + ((this.height/7)*2),radius,this.stage);
          draw_porint(this.x + (this.width/2),this.y + ((this.height/7)*5),radius,this.stage);;
        }else if(this.porints == 3){
          draw_porint(this.x + ((this.width/10)*2),this.y + ((this.height/10)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/10)*5),this.y + ((this.height/10)*5),radius,this.stage);
          draw_porint(this.x + ((this.width/10)*8),this.y + ((this.height/10)*8),radius,this.stage);
        }else if(this.porints == 4){
          draw_porint(this.x + ((this.width/7)*2),this.y + ((this.height/7)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*5),this.y + ((this.height/7)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*2),this.y + ((this.height/7)*5),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*5),this.y + ((this.height/7)*5),radius,this.stage);
        }else if(this.porints == 5){
          draw_porint(this.x + ((this.width/10)*2),this.y + ((this.height/10)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/10)*2),this.y + ((this.height/10)*8),radius,this.stage);
          draw_porint(this.x + ((this.width/10)*5),this.y + ((this.height/10)*5),radius,this.stage);
          draw_porint(this.x + ((this.width/10)*8),this.y + ((this.height/10)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/10)*8),this.y + ((this.height/10)*8),radius,this.stage);
        }else if(this.porints == 6){
          draw_porint(this.x + ((this.width/7)*2),this.y + ((this.height/10)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*5),this.y + ((this.height/10)*2),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*2),this.y + ((this.height/10)*5),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*5),this.y + ((this.height/10)*5),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*2),this.y + ((this.height/10)*8),radius,this.stage);
          draw_porint(this.x + ((this.width/7)*5),this.y + ((this.height/10)*8),radius,this.stage);
        }
      }
      Disc.prototype.redraw = function(){
        this.clean();
        this.porints = 1;
        this.draw_porints();
      }
      Disc.prototype.clean = function(){
        this.stage.ctx.clearRect(this.x,this.y,this.width,this.height);
      }
      function draw_porint(x,y,radius,stage){
        stage.ctx.beginPath();
        stage.ctx.arc(x,y,radius,0,2*Math.PI,false);
        stage.ctx.closePath();
        stage.ctx.fill();
      }
         
      function CallBoard(x,y,stage){
        this.x = x;
        this.y = y;
        this.width = 360;
        this.height = 50;
        this.stage = stage;
        this.notices = [];
        this.init();
      }
      CallBoard.prototype.init = function(){
        this.stage.ctx.beginPath();
        this.stage.ctx.strokeRect(this.x,this.y,this.width,this.height);
        this.stage.ctx.closePath();
        this.stage.ctx.stroke();
        this.draw();
      }
      CallBoard.prototype.draw = function(){
        for(var i =0;i<this.notices.length;i++){
          this.notices[i].init();
        }
      }
      CallBoard.prototype.redraw = function(){
        this.clean();
        this.init();
        this.draw();
      }
      CallBoard.prototype.clean = function(){
        this.stage.ctx.clearRect(this.x,this.y,this.width,this.height);
      }
      CallBoard.prototype.add = function(notice){
        if(!notice){return;}
        this.notices.push(notice);
      }
         
      function Notice(x,y,str,callBoard){
        this.x = x;
        this.y = y;
        this.str = str;
        this.width = 150;
        this.height = 10;
        this.stage = callBoard.stage;
        if(str == undefined){
          this.init();
        }else{
          this.init(str);
        }
      }
      Notice.prototype.init = function(){
        this.stage.ctx.fillText('暂无',this.x,this.y);
      }
      Notice.prototype.init = function(str){
        if(str != ''){
          this.str = str;
        }
        this.stage.ctx.fillText(this.str,this.x,this.y);
      }
      Notice.prototype.draw = function(str){
        this.init(str);
      }
      Notice.prototype.redraw = function(str){
        this.stage.ctx.clearRect(this.x,this.y-9,this.width,this.height);
        this.draw(str);
      }
         
      function Rule(){
        this.disc1 = {};
        this.disc2 = {};
        this.notice1 = {};
        this.notice2 = {};
        this.notice3 = {};
        this.count = 0;
        this.integral = [];
        this.hasNext = false;
           
      }
      Rule.prototype.init = function(stage){
        this.disc1 = stage.things['disc'][0];
        this.disc2 = stage.things['disc'][1];
        this.notice1 = stage.things['callBoard'][0].notices[0];
        this.notice2 = stage.things['callBoard'][0].notices[1];
        this.notice3 = stage.things['callBoard'][0].notices[2];
        this.count = this.disc1.porints + this.disc2.porints;
        this.notice1.redraw('色子1号当前点数为: '+this.disc1.porints+' 点');
        this.notice2.redraw('色子2号当前点数为: '+this.disc2.porints+' 点');
        this.notice3.redraw('当前点数和为:'+this.count+'点。');
      }
      Rule.prototype.run = function(){
        var str = this.notice3.str;
        this.notice3.width = 348;
        if(this.integral.length == 0){
          if(this.count == 7 || this.count == 11){
            str += '你的运气真好一把就赢了，继续加油哦！';
            this.notice3.redraw(str);
            this.hasNext = false;
            return this;
          }
          if(this.count == 2 || this.count == 3 || this.count == 12){
            str += '你也太衰了吧！第一把就输了，再来一把试试！';
            this.notice3.redraw(str)
            this.hasNext = false;
            return this;
          }
          if(this.count >=4 && this.count <= 10){
            this.integral.push(this.count);
            str += '请再抛一次骰子！';
            this.notice3.redraw(str);
            this.hasNext = true;
            return this;
          }
        }else{
          if(this.count == 7 || this.count != this.integral[this.integral.length - 1]){
            str += '不好意思，你输了……！';
            this.notice3.redraw(str);
            this.hasNext = false;
            return this;
          }
          if(this.count == this.integral[this.integral.length - 1]){
            str += '你太厉害了，竟然抛出和上一次一样的点数！恭喜你赢了！';
            this.notice3.redraw(str);
            this.hasNext = false;
            return this;
          }
        }
      }
         
      var stage = new Stage('game');
      stage.setings = function(){
        var x1 = 20,y1 = 20;
        var x2 = 210,y2 = 20;
        var callBoard = new CallBoard(20,200,stage);
        callBoard.add(new Notice(30,220,'色子1号，尚无点数。',callBoard));
        callBoard.add(new Notice(220,220,'色子2号，尚无点数。',callBoard));
        callBoard.add(new Notice(30,240,'当前尚无点数和。',callBoard));
         
        stage.add(new Disc(x1,y1,stage));
        stage.add(new Disc(x2,y2,stage));
        stage.add(callBoard);
        stage.rule = new Rule();
      }
      stage.setings();