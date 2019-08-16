class DOMNodeCollection {

    constructor (htmlEles) {
        this.htmlEles = htmlEles;
    };

    html(string) {
        if (string) {
            debugger
            this.htmlEles.forEach(el => {
                el.innerHTML = string 
            })
        }
        else {
            return this.htmlEles.first.innerHTML
        }

    }

    empty() {
        this.html("")
        return this.htmlEles;
    }

    append(arg) {
        
        for (let i = 0; i < this.htmlEles.length; i++) {
            
            if (typeof arg === 'string') {
                this.htmlEles[i].innerHTML += arg;
            }
        
            else if (arg instanceof HTMLElement) {
                
                this.htmlEles[i].innerHTML += arg.outerHTML;
            }

            else {
                
                for (let j = 0; j < arg.length; j++) {
                this.htmlEles[i].innerHTML += arg.htmlEles[j].outerHTML;
                }
            }
        }
    }


    attr(name, value) {
        if (typeof value === 'string') {
            this.htmlEles.forEach(el => {
                el.setAttribute(name,value)
            })
        } else {
            debugger
            return this.htmlEles[0].getAttribute(name);
        };
    };

    addClass (className) {
        this.attr('class', className)
    }

    removeClass () {
        this.attr('class', "")
    }

    children() {

    }

     parents() {

     }

     find(selector) {

     }

     remove() {
       
     }

}
module.exports = DOMNodeCollection;

/*
const ul = document.createElement('ul');
const $ul = $l(ul);
const li = document.createElement('li');
const $li = $l(li);
$ul.append($li);
*/