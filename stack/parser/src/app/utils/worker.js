init();
function init() {
    self.addEventListener('message', function (e) {
        var code = e.data;

        if (typeof code !== 'string' || code.match(/.*[a-zA-Z]+.*/g)) {
            respond('Error! Cannot evaluate complex expressions yet. Please try again later');
        } else {
            respond(evaluate(convert(code)));
        }
    })
}