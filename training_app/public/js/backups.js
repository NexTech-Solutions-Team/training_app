frappe.msgprint("hhhhhhh")

frappe.pages["background_jobs"].on_page_load = (wrapper) => {
    page.set_title('My Page')
	const background_job = new BackgroundJobs(wrapper);

	$(wrapper).bind("show", () => {
		background_job.show();
	});

	window.background_jobs = background_job;
};
// page.set_title('My Page')