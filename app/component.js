System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var check;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            check = (function () {
                //name : Array<string> ;
                function check() {
                    this.vote = 0;
                    this.title = "Angular 2";
                    this.link = "angular.com";
                    //  this.name = ["Pakistan","Lahore","Karachi"];
                }
                check.prototype.addArticle = function (a, b) {
                    //var userTitle:string = ${a:value} ;
                    //alert(userTitle);
                    //alert(a:${a.value});
                    alert("a:" + a.value);
                    a.value = "";
                };
                check.prototype.voteUp = function () {
                    //debugger;
                    this.vote += 1;
                    //        alert(this.vote)
                };
                check.prototype.voteDown = function () {
                    //  debugger;
                    this.vote -= 1;
                    //      alert(this.vote);
                };
                check = __decorate([
                    core_1.Component({
                        selector: 'atta'
                    }),
                    core_1.View({
                        template: "\n    <div style=\"padding:20px;\">\n        <form class=\"ui large form segment\" style=\"width:600px;height:300px;background:#ECFFFB;\">\n            <h3 class=\"ui header\">Add a Link</h3>\n                <div class=\"field\">\n                    <label for=\"title\">Title:</label>\n                    <input name=\"title\" #newtitle>\n                </div>\n                <div class=\"field\">\n                    <label for=\"link\">Link:</label>\n                    <input name=\"link\" #newlink>\n                </div>\n                <button (click)=\"addArticle(newtitle ,newlink)\" class=\"ui positive left floated button\">\n                    Submit link\n                </button>\n        </form>\n        <td>\n        <div class=\"four wide column center aligned votes\">\n            <div class=\"ui statistic\" style=\"width: 87px;height: 85px; border-radius: 7%;background-color: rgba(128, 128, 128, 0.3);\">\n                <div class=\"value\">\n                    {{vote}}\n                </div>\n                <div class=\"label\">\n                    Points\n                </div>\n            </div>\n        </div>\n        </td>\n        <td>\n        <div class=\"twelve wide column\">\n            <a class=\"ui large header\" href=\"{{ link }}\">\n                {{title}}\n            </a>\n\n            <ul class=\"ui big horizontal list voters\" >\n                <li class=\"item\">\n                    <a href=\"#\"(click)=\"voteUp()\">\n                        <i class=\"arrow up icon\" ></i>\n                        upvote\n                    </a>    \n                </li>\n                <li class=\"item\">\n                    <a href=\"#\" (click)=\"voteDown()\">\n                        <i class=\"arrow down icon\" ></i>\n                        downvote\n                    </a>\n                </li>\n            </ul>\n        </div>\n        </td>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], check);
                return check;
            })();
            exports_1("check", check);
        }
    }
});
//# sourceMappingURL=component.js.map