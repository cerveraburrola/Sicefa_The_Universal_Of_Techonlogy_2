
function iniciarSecion() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('pwd').value;




    if (username === 'admin' && password === 'admin') {
        window.open('sicefaCentral.html');
    } else if (username === 'usuario' && password === 'usuario') {
        window.open('sicefaSucursal.html');
    } else if (username === 'empleado' && password === 'empleado') {
        window.open('sicefaEmpleado.html');
    } else {

        alert('Nombre de usuario o contraseña incorrectos.');
    }
}





