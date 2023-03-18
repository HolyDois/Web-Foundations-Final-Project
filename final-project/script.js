
let response = $.ajax('https://api.adviceslip.com/advice');
console.log(response);
$.ajax(
    'https://api.adviceslip.com/advice',
    {
        success: function (APIResponse) {
            console.log(APIResponse);
            let advice1 = JSON.parse(APIResponse);
            console.log(advice1);
            var element = document.getElementById('row3');
            var newElement = document.createElement('p');
            newElement.style.cssText = 'font-weight:bold;text-align:center;background-color:palevioletred;margin-bottom: 0px';
            var newElement2 = document.createElement('p');
            newElement2.style.cssText = 'text-align:center;background-color:palevioletred;';
            newElement.innerHTML = "Advice for the day: " 
            newElement2.innerHTML = advice1.slip.advice;
            element.appendChild(newElement);
            element.appendChild(newElement2);

        }
    })

