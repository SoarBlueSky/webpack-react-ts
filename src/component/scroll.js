(function (){
    function updateIndicator(w){
        document.querySelector("#scrollDiv").style.width = w + "%";
    }

    window.onscroll = function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        window.requestAnimationFrame(function (){
            const w = (winScroll / height) * 100;
            updateIndicator(w);
        })
    }

    Math.easeout = function (A, B, rate, callback) {
        if (A === B || typeof A != 'number') {
            return;
        }
        B = B || 0;
        rate = rate || 2;

        const step = function () {
            A = A + (B - A) / rate;

            if (A < 1) {
                callback(B, true);
                return;
            }
            callback(A, false);
            requestAnimationFrame(step);
        };
        step();
    };

    // document.querySelector("#back").addEventListener("click",function (){
    //     const doc = document.body.scrollTop ? document.body : document.documentElement;
    //     Math.easeout(doc.scrollTop, 0, 5, function (value) {
    //         doc.scrollTop = value;
    //     });
    // })
}());