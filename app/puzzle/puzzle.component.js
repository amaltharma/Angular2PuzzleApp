System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'train-puzzle',
                        template: "\n  <section class=\"setup\">\n    <h2>Game Setup</h2>\n     Enter your name please:\n    <input type=\"text\" #name (keyup)=\"0\">\n  </section>\n\n  <!-- [class.puzzle]=\"true\"-->\n\n  <section\n  [ngClass] = \"{\n    puzzle: true,\n    solved: switch1.value == switch1Number\n    && switch2.value == switch2Number\n    && switch3.value == switch3Number\n    && switch4.value == switch4Number }\"\n  [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n      <h2>The Puzzle\n      |\n      {{switch1.value == switch1Number\n      && switch2.value == switch2Number\n      && switch3.value == switch3Number\n      && switch4.value == switch4Number\n      ? 'Solved' : 'Not Solved'}}</h2>\n      <p>Ok, welcome <span class=\"name\"> {{name.value}} </span></p>\n      <br>\n      Switch 1:\n      <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n      Switch 2:\n      <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n      Switch 3:\n      <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n      Switch 4:\n      <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n  </section>\n  <h2 [hidden] = \"switch1.value != switch1Number\n  || switch2.value != switch2Number\n  || switch3.value != switch3Number\n  || switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!</h2>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQUFBO2dCQWdCQSxDQUFDO2dCQVZBLGtDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFN0YsQ0FBQztnQkF6REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDJ4Q0F1Q1I7cUJBQ0YsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiBzZWxlY3RvcjogJ3RyYWluLXB1enpsZScsXG4gdGVtcGxhdGU6IGBcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICA8L3NlY3Rpb24+XG5cbiAgPCEtLSBbY2xhc3MucHV6emxlXT1cInRydWVcIi0tPlxuXG4gIDxzZWN0aW9uXG4gIFtuZ0NsYXNzXSA9IFwie1xuICAgIHB1enpsZTogdHJ1ZSxcbiAgICBzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlclxuICAgICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlclxuICAgICYmIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlclxuICAgICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciB9XCJcbiAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJ31cIj5cbiAgICAgIDxoMj5UaGUgUHV6emxlXG4gICAgICB8XG4gICAgICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlclxuICAgICAgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyXG4gICAgICAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXJcbiAgICAgICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlclxuICAgICAgPyAnU29sdmVkJyA6ICdOb3QgU29sdmVkJ319PC9oMj5cbiAgICAgIDxwPk9rLCB3ZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPiB7e25hbWUudmFsdWV9fSA8L3NwYW4+PC9wPlxuICAgICAgPGJyPlxuICAgICAgU3dpdGNoIDE6XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgIFN3aXRjaCAyOlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICBTd2l0Y2ggMzpcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgU3dpdGNoIDQ6XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj5cbiAgPC9zZWN0aW9uPlxuICA8aDIgW2hpZGRlbl0gPSBcInN3aXRjaDEudmFsdWUgIT0gc3dpdGNoMU51bWJlclxuICB8fCBzd2l0Y2gyLnZhbHVlICE9IHN3aXRjaDJOdW1iZXJcbiAgfHwgc3dpdGNoMy52YWx1ZSAhPSBzd2l0Y2gzTnVtYmVyXG4gIHx8IHN3aXRjaDQudmFsdWUgIT0gc3dpdGNoNE51bWJlclwiPkNvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XG4gc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcbiBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XG5cbiBuZ09uSW5pdCgpOmFueXtcbiAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICB0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDFOdW1iZXIsIHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpO1xuXG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
