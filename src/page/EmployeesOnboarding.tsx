import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { InputField } from './components/TableOptions';
import Header from './components/Header';

const EmployeesOnboarding = () => {
	const [activeKey, setActiveKey] = useState<any>(null);
	const handleAccordionClick = (eventKey: any) => {
		if (activeKey === eventKey) {
			setActiveKey(null);
		} else {
			setActiveKey(eventKey);
		}
	};


	const handleNextClick = () => {
		// Find the index of the currently active accordion item
		const currentIndex = parseInt(activeKey, 10);
		// Calculate the eventKey for the next accordion item
		const nextIndex = currentIndex < 4 ? currentIndex + 1 : 4; // Assuming you have 5 accordion items (0 to 4)
		// Open the next accordion item
		setActiveKey(nextIndex.toString());
	};


	const [input, setInput] = useState({
		first_name: "",
		last_name: "",
		middle_name: "",
		mothers_maiden_name: "",
		email: "",
		personal_email: "",
		gender: "",
		phone: "",
		date_of_birth: "",
		marital_status: "",
		has_disability: false,
		disability: "",
		nin: "",

		religion: "",
		institution_attended: "",
		course_studied: "",
		qualification: "",

		address: "",
		city: "",
		state_of_origin: "",
		country: "",
		lga: "",
		state_of_residence: "",

		role: "",
		department: "",
		location: "",
		category: "",
		is_office_staff: true,
		is_expatriate: true,
		visa_type: "",
		passport_number: "",
		visa_duration: 40,

		employment_type: "",
		employment_date: "",
		tally_number: "",
		confirmation_date: "",
		has_work_location_objection: true,
		work_location_objection: "",
		supervisor: "",

		salary: "",
		payment_method: "",
		bank_name: "",
		bank_account_number: "",
		bank_account_name: "",

		next_of_kin: "",
		next_of_kin_phone: "",
		next_of_kin_email: "",
		next_of_kin_address: "",
		relationship_to_next_of_kin: "",
		referee_name: "",
		referee_phone: "",
		emergency_contact_name: "",
		emergency_contact_phone: ""
	});



	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};



	return (
		<div id="page-wrapper">
			<Header />
			<Helmet>
				<title>Employees Onboarding | Richforth Group</title>
			</Helmet>
			<main>
				{/* <div className='roll-title'>
					<h5 className="page-title"> </h5>
					<div className='roll-icon' onClick={() => navigate(-1)}>
						<IoArrowBackSharp size={22} />
					</div>
				</div> */}

				<div className='half-background mt-4'>
					<Accordion activeKey={activeKey} onSelect={handleAccordionClick}>
						<div >
							<Accordion.Item eventKey="0">
								<div id='accordion-body-form'>
									<Accordion.Header>Employee Details</Accordion.Header>
									<Accordion.Body>
										<div >
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.first_name}
															label="First Name"
															name="first_name"
															placeholder="Enter First Name"
															onChange={(e: any) => handleOnChange("first_name", e.target.value)}
														/>
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.middle_name}
															label="Middle Name"
															name="middle_name"
															placeholder="Enter Middle Name"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)}
														/>
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Last Name"
															name="last_name"
															placeholder="Enter Last Name"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.mothers_maiden_name}
															label="Mother’s Maiden Name"
															name="mothers_maiden_name"
															placeholder="Enter Mother’s Maiden Name"
															onChange={(e: any) => handleOnChange("mothers_maiden_name", e.target.value)}
														/>
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.email}
															label="Official Email"
															name="email"
															placeholder="Enter Official Email"
															onChange={(e: any) => handleOnChange("email", e.target.value)}
														/>
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.personal_email}
															label="Personal Email"
															name="personal_email"
															placeholder="Enter Personal Email"
															onChange={(e: any) => handleOnChange("personal_email", e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.gender}
															label="Gender"
															name="Gender"
															placeholder="Enter Gender"
															onChange={(e: any) => handleOnChange("gender", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.phone}
															label="Phone"
															name="phone"
															placeholder="Enter Phone"
															onChange={(e: any) => handleOnChange("phone", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.date_of_birth}
															type={"date"}
															label="Date Of Birth"
															name="date_of_birth"
															placeholder="Enter Date Of Birth"
															onChange={(e: any) => handleOnChange("date_of_birth", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.marital_status}
															label="Marital Status"
															name="marital_status"
															placeholder="Enter Marital Status"
															onChange={(e: any) => handleOnChange("marital_status", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.has_disability}
															label="Has Disability"
															name="has_disability"
															placeholder="Enter Has Disability"
															onChange={(e: any) => handleOnChange("has_disability", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.nin}
															label="NIN"
															name="nin"
															placeholder="Enter NIN"
															onChange={(e: any) => handleOnChange("nin", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.religion}
															label="Religion"
															name="religion"
															placeholder="Enter Religion"
															onChange={(e: any) => handleOnChange("religion", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">

													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
													</div>
												</div>
											</div>
										</div>
										<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
											<button id='view-status' onClick={handleNextClick}>Next</button>
										</div>
									</Accordion.Body>
								</div>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<div id='accordion-body-form'>
									<Accordion.Header>Address</Accordion.Header>
									<Accordion.Body>
										<div >
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Street"
															name="first_name"
															placeholder="Enter Street"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.city}
															label="City"
															name="city"
															placeholder="Enter City"
															onChange={(e: any) => handleOnChange("city", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.lga}
															label="LGA"
															name="lga"
															placeholder="Enter LGA"
															onChange={(e: any) => handleOnChange("lga", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.state_of_origin}
															label="State of Residence"
															name="state_of_origin"
															placeholder="Enter State of Residence"
															onChange={(e: any) => handleOnChange("state_of_origin", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.state_of_residence}
															label="State of Origin"
															name="state_of_residence"
															placeholder="Enter State of Origin"
															onChange={(e: any) => handleOnChange("state_of_residence", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.country}
															label="Country of Origin"
															name="country"
															placeholder="Enter Country of Origin"
															onChange={(e: any) => handleOnChange("country", e.target.value)} />
													</div>
												</div>
											</div>
										</div>
										<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
											<button id='view-status' onClick={handleNextClick}>Next</button>
										</div>
									</Accordion.Body>
								</div>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<div id='accordion-body-form'>
									<Accordion.Header>Employment Details</Accordion.Header>
									<Accordion.Body>
										<div >
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Job Title"
															name="first_name"
															placeholder="Enter Job Title"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.department}
															label="Department"
															name="department"
															placeholder="Enter Department"
															onChange={(e: any) => handleOnChange("department", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.location}
															label="Location"
															name="location"
															placeholder="Enter Location"
															onChange={(e: any) => handleOnChange("location", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.category}
															label="Category"
															name="category"
															placeholder="Enter Category"
															onChange={(e: any) => handleOnChange("category", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.is_expatriate}
															label="Is Expatriate"
															name="is_expatriate"
															placeholder="Enter Is Expatriate"
															onChange={(e: any) => handleOnChange("is_expatriate", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.supervisor}
															label="Supervisor"
															name="supervisor"
															placeholder="Enter Supervisor"
															onChange={(e: any) => handleOnChange("supervisor", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.employment_type}
															label="Employment Type"
															name="employment_type"
															placeholder="Enter Employment Type"
															onChange={(e: any) => handleOnChange("employment_type", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.employment_date}
															type={"date"}
															label="Employment Date"
															name="employment_date"
															placeholder="Enter Employment Date"
															onChange={(e: any) => handleOnChange("employment_date", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.tally_number}
															label="Tally Number"
															name="middle_name"
															placeholder="Enter Tally Number"
															onChange={(e: any) => handleOnChange("tally_number", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															type={"date"}
															values={input.confirmation_date}
															label="Confirmation Date"
															name="first_name"
															placeholder="Enter Confirmation Date"
															onChange={(e: any) => handleOnChange("confirmation_date", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.work_location_objection}
															label="Location Objection"
															name="work_location_objection"
															placeholder="Enter Location Objection"
															onChange={(e: any) => handleOnChange("work_location_objection", e.target.value)} />
													</div>
												</div>
											</div>

										</div>
										<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
											<button id='view-status' onClick={handleNextClick}>Next</button>
										</div>
									</Accordion.Body>
								</div>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<div id='accordion-body-form'>
									<Accordion.Header>Finance Details</Accordion.Header>
									<Accordion.Body>
										<div >
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.payment_method}
															label="Payment Method"
															name="payment_method"
															placeholder="Enter Payment Method"
															onChange={(e: any) => handleOnChange("payment_method", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.salary}
															label="Gross Salary"
															name="salary"
															placeholder="Enter Gross Salary"
															onChange={(e: any) => handleOnChange("salary", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Basic Salary"
															name="last_name"
															placeholder="Enter Basic Salary"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Utility Allowance"
															name="first_name"
															placeholder="Enter Utility Allowance"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Medical Allowance"
															name="middle_name"
															placeholder="Enter Medical Allowance"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Housing  Allowance"
															name="last_name"
															placeholder="Enter Housing  Allowance"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Transportation Allowance"
															name="first_name"
															placeholder="Enter Transportation Allowance"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Meal Allowance"
															name="middle_name"
															placeholder="Enter Meal Allowance"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.bank_name}
															label="Bank"
															name="bank_name"
															placeholder="Enter Bank"
															onChange={(e: any) => handleOnChange("bank_name", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.bank_account_name}
															label="Bank Account Name"
															name="bank_account_name"
															placeholder="Enter Bank Account Name"
															onChange={(e: any) => handleOnChange("bank_account_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.bank_account_number}
															label="Bank Account Number"
															name="bank_account_number"
															placeholder="Enter Bank Account Number"
															onChange={(e: any) => handleOnChange("bank_account_number", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">

													</div>
												</div>
											</div>

										</div>
										<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
											<button id='view-status' onClick={handleNextClick}>Next</button>
										</div>
									</Accordion.Body>
								</div>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<div id='accordion-body-form'>
									<Accordion.Header>References</Accordion.Header>
									<Accordion.Body>
										<div >
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.next_of_kin}
															label="Next of Kin"
															name="next_of_kin"
															placeholder="Enter Next of Kin"
															onChange={(e: any) => handleOnChange("next_of_kin", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.next_of_kin_phone}
															label="Next of Kin Phone Number"
															name="next_of_kin_phone"
															placeholder="Enter Next of Kin Phone Number"
															onChange={(e: any) => handleOnChange("next_of_kin_phone", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.last_name}
															label="Next of Kin Email"
															name="last_name"
															placeholder="Enter Next of Kin Email"
															onChange={(e: any) => handleOnChange("middle_name", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.next_of_kin_address}
															label="Next of Kin Address"
															name="next_of_kin_address"
															placeholder="Enter Next of Kin Address"
															onChange={(e: any) => handleOnChange("next_of_kin_address", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />

												<div className="col">
													<div className="form-group">
														<InputField
															values={input.relationship_to_next_of_kin}
															label="Relationship to Next of Kin"
															name="relationship_to_next_of_kin"
															placeholder="Enter Relationship to Next of Kin"
															onChange={(e: any) => handleOnChange("relationship_to_next_of_kin", e.target.value)} />
													</div>
												</div>

												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.referee_name}
															label="Referee Name"
															name="referee_name"
															placeholder="Enter Referee Name"
															onChange={(e: any) => handleOnChange("referee_name", e.target.value)} />
													</div>
												</div>
											</div>
											<div className="row-item">
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.referee_phone}
															label="Referee Phone Number"
															name="referee_phone"
															placeholder="Enter Referee Phone Number"
															onChange={(e: any) => handleOnChange("referee_phone", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.emergency_contact_name}
															label="Emergency Contact Name"
															name="emergency_contact_name"
															placeholder="Enter Emergency Contact Name"
															onChange={(e: any) => handleOnChange("emergency_contact_name", e.target.value)} />
													</div>
												</div>
												<div className="imput-space" />
												<div className="col">
													<div className="form-group">
														<InputField
															values={input.emergency_contact_phone}
															label="Emergency Contact Phone Number"
															name="emergency_contact_phone"
															placeholder="Enter Emergency Contact Phone Number"
															onChange={(e: any) => handleOnChange("emergency_contact_phone", e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }} >
												<button id='view-status' type="submit"  >Send</button>
											</div>
										</div>
									</Accordion.Body>
								</div>
							</Accordion.Item>
						</div>
					</Accordion>
				</div>

			</main>
		</div>
	)
}

export default EmployeesOnboarding
