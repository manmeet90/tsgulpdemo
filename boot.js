require(['./build/Employee'], function (Employee) {
	var max = new Employee();
	document.getElementById("name").innerText = max.getName();
	document.getElementById("age").innerText = max.getAge().toString();
	document.getElementById("empid").innerText = max.getEmpId().toString();
});

