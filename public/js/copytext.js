function copyText(target) {

    getText(target);
    newIcon(target);
    function deleteAlert() {
        setInterval(() => {
            const alertMessage = document.getElementById("liveAlertPlaceholder");
            alertMessage.removeChild(alertMessage.firstChild);
        }, 5000);
    }
    function getText(target) {
        var clipboard = document.getElementById(target);
        var blockquote = clipboard.nextElementSibling.innerHTML;
        console.log(blockquote);

        navigator.clipboard.writeText(blockquote);
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        const alertTrigger = document.getElementById('liveAlertBtn');
        const alertTrigger2 = document.getElementById('liveAlertBtn2');
        const alertTrigger3 = document.getElementById('liveAlertBtn3');
        const alertTrigger4 = document.getElementById('liveAlertBtn4');
        const alertTrigger5 = document.getElementById('liveAlertBtn5');
        const deliveryMessage = "Success! You have copied the following text to your clipboard: "
        alertTrigger.addEventListener('click', function () {
            alert(deliveryMessage + blockquote, 'success');
            deleteAlert();
        })
        alertTrigger2.addEventListener('click', () => {
            alert(deliveryMessage + blockquote, 'success');
            deleteAlert();
        })
        alertTrigger3.addEventListener('click', () => {
            alert(deliveryMessage + blockquote, 'success');
            deleteAlert();
        })
        alertTrigger4.addEventListener('click', () => {
            alert(deliveryMessage + blockquote, 'success');
            deleteAlert();
        })
        alertTrigger5.addEventListener('click', () => {
            alert(deliveryMessage + blockquote, 'success');
            deleteAlert();
        })

    }

    function newIcon(target) {

        var icons = document.getElementById(target);
        icons.addEventListener("click", switchIcon);

        function switchIcon() {
            icons.classList.remove("bi-clipboard");
            icons.classList.add("bi-clipboard-check");
            setInterval(function () {
                icons.classList.remove("bi-clipboard-check");
                icons.classList.add("bi-clipboard");
            }, 2000);
        }
    }
}

