function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	const fname = document.querySelector('input[name="fname"]').value.trim();
	const lanem  = document.querySelector('input[name="lanem"]');

	const fullName = `${fname} ${lanem}`;
	alert(fullName);
	

}
