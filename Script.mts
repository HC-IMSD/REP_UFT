Function veterinaryScenario

'open RT v4.0.10
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction 2")_;_script infofile_;_ZIP::ssf504.xml_;_

'set dossier type to Veterinary
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Select "Veterinary"

'set company ID to 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Set "12345"

'set dossier ID to 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Set "1234567"

'set product name to ABC
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Set "ABC"

'Will the submission be signed...set to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebElement("Yes").Click 

'Is this regulatory activity an...set to Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_admin_submission_18").Select "Y"

'set Reason for Administrative Submission...set to Manufacturer Name Changes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("admin_sub_type_18").Select "Manufacturer Name Changes"

'set control number to 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Set "123456"

'set regulatory activity lead to Veterinary
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Select "Veterinary"

'set regulatory activity type to MPNC
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Select "MPNC (Pre-Submission Meeting Information)"

'set Regulatory Transaction Description to Response to Processing Clarification Request
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Select "Response to Processing Clarification Request"

'set Dated to 2018-12-25
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dated_60").Set "2018-12-25"

'set name of requester to Thomas Edison
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("requester_name_60").Set "Thomas Edison"

'set name of requester to Albert Einstein
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("requester_name2_60").Set "Albert Einstein"

'set name of requester to Alexander Bell
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("requester_name3_60").Set "Alexander Bell"

'set name of regulatory project manager to John Doe
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Set "John Doe"

'set name of regulatory project manager to Jane Roe
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Set "Jane Roe"

'Company Information:
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Set "The Brave Companions" 'company name

'street address
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Set "123 Fake Street" 'street address

'city or town
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Set "Harrenhall" 'city or town

'country
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Set "United Kingdom of Great Britain and Northern Ireland" 'country

'province or state
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Set "Westeros" 'province or state

'postal code
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Set "K8N7B6" 'postal code

'Company Representative:
'first name
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Set "Janos " 'first name

'initials
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Set "E" 'initials

'last name
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Set "Slynt" 'last name

'language of correspondence
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Select "English" 'language of correspondence

'job title
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Set "Commander" 'job title

'phone number
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Set "12341234" 'phone number

'phone extension
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Set "1234" 'phone extension

'fax number
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Set "1234567890" 'fax number

'email
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Set "fakeemail@gmail.com" 'email

'I confirm that the above regulatory activity contact information is valid - radio button
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Set "ON"

'By submitting your personal information, you are consenting to its collection, use and disclosure in accordance with the Privacy Notice Statement - radio button
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Set "ON"

'save working copy - .hcsc file
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy").Click

'wait for the save tab to appear
wait(4)

'click down button to the right of the save button
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click

'click save as button
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"

'save working copy file as RT-v4.0.10-new.hcsc
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "RT-veterinary-combined"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn

'click the back button
Browser("Dev REP forms").Back

'confirm leave page
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click
End  Function

Function veterinaryTest

'click link for RT v4.0.10
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction_2").Click

'load v4.0.10-new.hcsc @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction Template - External (Nov 20, 2019, v4.0.15)")_;_script infofile_;_ZIP::ssf224.xml_;_
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\RT-veterinary-combined.hcsc"


'THE FOLLOWING CODE CHECKS THE VALUES IN THE FIELDS
'dossier type - checkpoint
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Check CheckPoint("dossier_type_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf231.xml_;_

'check Company ID is 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Check CheckPoint("company_id_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf233.xml_;_

'check Dossier ID is 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Check CheckPoint("dossier_id_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf235.xml_;_

'check Product Name is ABC
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Check CheckPoint("prod_name_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf237.xml_;_

'check signed/filed by a third party is Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Check CheckPoint("is_signed_3rd_party_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf239.xml_;_

'check Is this regulatory activity an Administrative Submission is Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_admin_submission_18").Check CheckPoint("is_admin_submission_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf241.xml_;_

'check Reason for Administrative Submission is Manufacturer and Product Name Changes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("admin_sub_type_18").Check CheckPoint("admin_sub_type_18") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf243.xml_;_

'check Control Number is 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Check CheckPoint("control_num_62") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf245.xml_;_

'check Regulatory Activity Lead is Veterinary
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Check CheckPoint("activity_lead_62") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf247.xml_;_

'check Regulatory Activity Type is MPNC
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Check CheckPoint("reg_activity_type_62") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf249.xml_;_

'check Regulatory Transaction Description is Response to Processing Clarification Request
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Check CheckPoint("sequence_type_62") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf251.xml_;_

'check Dated is 2018-12-25
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dated_60").Check CheckPoint("dated_60") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf253.xml_;_

'check Name of requester 1 is Thomas Edison
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("requester_name_60").Check CheckPoint("requester_name_60") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf255.xml_;_

'check Name of requester 2 is Albert Einstein
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("requester_name2_60").Check CheckPoint("requester_name2_60") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf257.xml_;_

'check Name of requester 3 is Alexander Bell
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("requester_name3_60").Check CheckPoint("requester_name3_60") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf259.xml_;_

'check Name of Regulatory Project Manager 1 is John Doe
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Check CheckPoint("projectManager1_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf261.xml_;_

'check Name of Regulatory Project Manager 2 is Jame Roe
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Check CheckPoint("projectManager2_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf263.xml_;_

'check Company Name is The Brave Companions
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Check CheckPoint("company_noabbrev_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf265.xml_;_

'check Street Address is 123 Fake Street
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Check CheckPoint("CITY_90") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf269.xml_;_

'check City or Town is Harrenhall
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Check CheckPoint("COUNTRY_90") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf271.xml_;_

'check Country is United Kingdom of Great Britain and Northern Ireland
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Check CheckPoint("proveState_89") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf273.xml_;_

'check Province or State is Westeros
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Check CheckPoint("postal_89") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf275.xml_;_

'check Postal COde is K8N7B6
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Check CheckPoint("firstName_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf277.xml_;_

'check Initials is E
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Check CheckPoint("initials_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf279.xml_;_

'check Last Name is Slynt
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Check CheckPoint("lastName_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf281.xml_;_

'check Language of Correspondence is English
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Check CheckPoint("langCorrespond_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf283.xml_;_

'check Job Title is Commander
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Check CheckPoint("jobTitle_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf285.xml_;_

'check Phone Number is 12341234
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Check CheckPoint("phoneNumber_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf287.xml_;_

'check Phone Extension is 1234
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Check CheckPoint("phoneExt_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf289.xml_;_

'check Fax Number is 1234567890
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Check CheckPoint("fax_number_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf291.xml_;_

'check Email is fakeemail@gmail.com
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Check CheckPoint("contactEmail_601") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf293.xml_;_

'check regulatory activity information checkbox is blank
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Check CheckPoint("confirm_contact_valid_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf295.xml_;_

'check privacy notice statement checkbox is blank
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_5")
End Function


Function biologicScenario()

'click RT4.0.10 link
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction_2").Click

'set Dossier Type to Biologic
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Select "Biologic" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier type 18")_;_script infofile_;_ZIP::ssf89.xml_;_

'set Company ID to 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company id 18")_;_script infofile_;_ZIP::ssf90.xml_;_

'set Dossier ID is 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Set "1234567" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod name 18")_;_script infofile_;_ZIP::ssf92.xml_;_

'set Product Name to PRODUCT NAME
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Set "PRODUCT NAME" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod name 18")_;_script infofile_;_ZIP::ssf93.xml_;_

'set will the submission be signed/filed by a third party to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is signed 3rd party 18")_;_script infofile_;_ZIP::ssf94.xml_;_

'set approved for priority review to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_priority_19").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is priority 19")_;_script infofile_;_ZIP::ssf95.xml_;_

'set approved for NOC/C review to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_noc_19").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is noc 19")_;_script infofile_;_ZIP::ssf96.xml_;_

'set is this regulatory activity an Administrative Submission to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_admin_submission_19").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is admin submission 19")_;_script infofile_;_ZIP::ssf97.xml_;_

'set Control Number to 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Set "123456" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control num 60")_;_script infofile_;_ZIP::ssf98.xml_;_

'set Regulatory Activity Lead to Biological
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Select "Biological" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg activity type 60")_;_script infofile_;_ZIP::ssf101.xml_;_

'set Regulatory Activity Type to MPDIN
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Select "MPDIN (Pre-Submission Meeting Information)" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence type 60")_;_script infofile_;_ZIP::ssf104.xml_;_

'set Regulatory Transaction Description to Cancellation Letter
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Select "Cancellation Letter" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1")_;_script infofile_;_ZIP::ssf108.xml_;_

'set Name of Regulatory Project Manager to Tully baratheon
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Set "Tully baratheon" @@ hightlight id_;_Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("projectManager2")_;_script infofile_;_ZIP::ssf113.xml_;_

'set Name of Regulatory Project Manager to theon greyjoy
Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("projectManager2").Set "theon greyjoy" @@ hightlight id_;_Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("projectManager2")_;_script infofile_;_ZIP::ssf114.xml_;_

'set new or revised fees associated with this transaction to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_fee_transaction_19").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company noabbrev 18")_;_script infofile_;_ZIP::ssf119.xml_;_

'set Company Name to allied biscuit
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Set "allied bicsuit" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET 88")_;_script infofile_;_ZIP::ssf125.xml_;_

'set Street Address to 123 fake streeft
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Set "123 fake streeft" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET 88")_;_script infofile_;_ZIP::ssf126.xml_;_

'set City or Town to springfield
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Set "springfield" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY 88")_;_script infofile_;_ZIP::ssf127.xml_;_

'set Country to Bahrain
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Set "Bahrain" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState 88")_;_script infofile_;_ZIP::ssf129.xml_;_

'set Province or State to niarobi
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Set "niarobi" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal 88")_;_script infofile_;_ZIP::ssf133.xml_;_

'set Postal Code K8N7B6
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Set "K8N7B6" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal 88")_;_script infofile_;_ZIP::ssf134.xml_;_

'set First Name to john
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Set "john" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials")_;_script infofile_;_ZIP::ssf136.xml_;_

'set Initials to birch
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Set "birch" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName 599")_;_script infofile_;_ZIP::ssf138.xml_;_

'set Last Name to Grant
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Set "Grant" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf140.xml_;_

'set Language of Correspondence to English
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Set "general manager" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf141.xml_;_

'set Job Title to general manager
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Select "English" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond 599")_;_script infofile_;_ZIP::ssf142.xml_;_

'set Phone Number to 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Set "123123123" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber 599")_;_script infofile_;_ZIP::ssf143.xml_;_

'set Phone Extension to 123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Set "123" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt 599")_;_script infofile_;_ZIP::ssf144.xml_;_

'set Fax Number to 123123123
Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("fax_number_599").Set "123123123" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf146.xml_;_

'set Email to fakeemail@gmail.com
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Set "fakeemail@gmail.com" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf147.xml_;_

'click regulatory activity contact information confirmation checkbox
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm contact valid 18")_;_script infofile_;_ZIP::ssf148.xml_;_

'click Privacy Notice Statement checkbox
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf149.xml_;_

'click Save Working Copy button
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf150.xml_;_
wait(5)

'save the file as RT-biologic-combined.hcsc
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_1881412296_;_script infofile_;_ZIP::ssf151.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").SetSelection 0,28 @@ hightlight id_;_67096_;_script infofile_;_ZIP::ssf152.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "RT-biologic-combined" @@ hightlight id_;_67096_;_script infofile_;_ZIP::ssf153.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn @@ hightlight id_;_67096_;_script infofile_;_ZIP::ssf154.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back @@ hightlight id_;_66730_;_script infofile_;_ZIP::ssf155.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click
End Function
 @@ hightlight id_;_132692_;_script infofile_;_ZIP::ssf156.xml_;_
Function biologicTest()

'open REP RT form
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction_2").Click

'load file RT-biologic-combined.hcsc
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\RT-biologic-combined.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf158.xml_;_
wait(4)

'check Dossier Type is Biologic
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Check CheckPoint("dossier_type_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf160.xml_;_

'check Company ID is 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Check CheckPoint("company_id_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf162.xml_;_

'check Dossier ID is 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Check CheckPoint("dossier_id_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf164.xml_;_

'check Product Name is PRODUCT NAME
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Check CheckPoint("prod_name_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf166.xml_;_

'check signed/field by a third party is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Check CheckPoint("is_signed_3rd_party_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf176.xml_;_

'check approved for priority review is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_priority_18").Check CheckPoint("is_priority_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf170.xml_;_

'check regulatory activity approved for NOC/C is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_noc_18").Check CheckPoint("is_noc_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf172.xml_;_

'check is this regulatory activity an Administrative Submission is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_admin_submission_18").Check CheckPoint("is_admin_submission_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf174.xml_;_

'check Control Number is 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Check CheckPoint("control_num_61")

'check approved for priority review is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Check CheckPoint("activity_lead_61")

'check Regulatory Activity Type is MPDIN
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Check CheckPoint("reg_activity_type_61") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf180.xml_;_

'check Regulatory Transaction Description is Cancellation Letter
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Check CheckPoint("sequence_type_61") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf182.xml_;_

'check Name of Regulatory Project Manager 1 is Tully baratheon
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Check CheckPoint("projectManager1_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf184.xml_;_

'check Name of Regulatory Project Manager 2 is theon greyjoy
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Check CheckPoint("projectManager2_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf186.xml_;_

'check new or revised fees is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_fee_transaction_18").Check CheckPoint("is_fee_transaction_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf188.xml_;_

'check Company Name is allied biscuit
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Check CheckPoint("company_noabbrev_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf190.xml_;_

'check Street Address is 123 fake streeft
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Check CheckPoint("STREET_89") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf192.xml_;_

'check City or Town is springfield
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Check CheckPoint("CITY_89") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf194.xml_;_

'check Country is Bahrain
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Check CheckPoint("COUNTRY_89") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf196.xml_;_

'check Province or State is niarobi
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Check CheckPoint("proveState_88") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf198.xml_;_

'check Postal Code is K8N7B6
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Check CheckPoint("postal_88") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf200.xml_;_

'check First Name is john
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Check CheckPoint("firstName_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf202.xml_;_

'check Initials is birch
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Check CheckPoint("initials_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials")_;_script infofile_;_ZIP::ssf203.xml_;_

'check Last Name is Grant
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Check CheckPoint("lastName_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf206.xml_;_

'check Language of Correspondence is English
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Check CheckPoint("langCorrespond_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf208.xml_;_

'check Job Title is general manager
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Check CheckPoint("jobTitle_600")

'check Phone Number is 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Check CheckPoint("phoneNumber_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf212.xml_;_

'check Phone Extension is 123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Check CheckPoint("phoneExt_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf214.xml_;_

'check Fax Number is 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Check CheckPoint("fax_number_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf216.xml_;_

'check Email is fakeemail@gmail.com
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Check CheckPoint("contactEmail_600") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf218.xml_;_

'check regulatory acitivty contact information checkbox is checked
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Check CheckPoint("confirm_contact_valid_19") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf220.xml_;_

'check Privacy Notice Statement checkbox is checked
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf221.xml_;_

End Function

Function PharmaceuticalScenario

'click link for RT-4.0.10
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier type 18")_;_script infofile_;_ZIP::ssf301.xml_;_
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Select "Pharmaceutical" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier type 18")_;_script infofile_;_ZIP::ssf302.xml_;_

'set Company ID to 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company id 18")_;_script infofile_;_ZIP::ssf303.xml_;_

'set Dossier ID to 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Set "1234567" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier id 18")_;_script infofile_;_ZIP::ssf304.xml_;_

'set Product Name to PRODUCT
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Set "PRODUCT" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod name 18")_;_script infofile_;_ZIP::ssf305.xml_;_

'set submission be signed/filed by a third party to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is signed 3rd party 18")_;_script infofile_;_ZIP::ssf306.xml_;_

'set approved for priority review to Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_priority_18").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is priority 18")_;_script infofile_;_ZIP::ssf307.xml_;_

'set regulatory activity approved for NOC/C review to Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_noc_18").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is noc 18")_;_script infofile_;_ZIP::ssf308.xml_;_

'set this regulatory activity an Administrative Submission to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_admin_submission_19").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is admin submission 19")_;_script infofile_;_ZIP::ssf309.xml_;_

'set Control Number to 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Set "123456" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity lead 60")_;_script infofile_;_ZIP::ssf312.xml_;_

'set Regulatory Activity Lead to Consumer Health Product
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Select "Consumer Health Product" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity lead 60")_;_script infofile_;_ZIP::ssf313.xml_;_

'set Regulatory Activity Type to ANDS
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Select "ANDS (Abbreviated New Drug Submission)" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence type 60")_;_script infofile_;_ZIP::ssf316.xml_;_

'set Regulatory Transaction Description to Administrative
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Select "Administrative" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence type 60")_;_script infofile_;_ZIP::ssf317.xml_;_

'set Name of Regulatory Project Manager 1 to John McCain
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_fee_transaction_19").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company noabbrev 18")_;_script infofile_;_ZIP::ssf328.xml_;_

'set Name of Regulatory Project Manager 2 to George McClellen
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Set "Bort Industries" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1")_;_script infofile_;_ZIP::ssf321.xml_;_

'set new or revised fees associated with this transaction to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Set "John McCain" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2")_;_script infofile_;_ZIP::ssf324.xml_;_

'set Company Name to Bort Industries
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Set "Geoge McClellen" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET 88")_;_script infofile_;_ZIP::ssf332.xml_;_

'set Street Address to 1234 Fake Street
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Set "1234 Fake Street" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY 88")_;_script infofile_;_ZIP::ssf335.xml_;_

'set City or Town to Cincinnati
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Set "Cincinnati" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY 88")_;_script infofile_;_ZIP::ssf336.xml_;_

'set Country to Rwanda
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Set "Rwanda" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState 88")_;_script infofile_;_ZIP::ssf338.xml_;_

'set Province or State to Umbottabad
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Set "Umbottabad" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal 88")_;_script infofile_;_ZIP::ssf342.xml_;_

'set Postal Code to N7B6V5
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Set "N7B6V5" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName 599")_;_script infofile_;_ZIP::ssf344.xml_;_

'set First Name to Howard Dean
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Set "Howard Dean" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName 599")_;_script infofile_;_ZIP::ssf345.xml_;_

'set Initials to A
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Set "A" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName 599")_;_script infofile_;_ZIP::ssf347.xml_;_

'set Last Name to Johnson
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Set "Johnson" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName 599")_;_script infofile_;_ZIP::ssf348.xml_;_

'set Language of Correspondence to English
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Select "English" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf352.xml_;_

'set Job Title to Assisstant Shoeshiner
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Set "Assisstant shoeshiner" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf353.xml_;_

'set Phone Number to 5138677711
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Set "5138677711" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber 599")_;_script infofile_;_ZIP::ssf354.xml_;_

'set Phone Extension to 123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Set "123" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt 599")_;_script infofile_;_ZIP::ssf355.xml_;_

'set Fax Number to 0000000000001
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Set "0000000000001" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf361.xml_;_

'set Email to thesupersalesman@gmail.com
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Set "thesupersalesman@gmail.com" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf362.xml_;_

'click regulatory activity contact infromation confirmation checkbox
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm contact valid 18")_;_script infofile_;_ZIP::ssf363.xml_;_

'click Privacy Notice Statement checkbox
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf364.xml_;_

'click Save Working Copy button
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf365.xml_;_
wait(4)

'save file as RT-pharmaceutical-combined.hcsc
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_1888419944_;_script infofile_;_ZIP::ssf366.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").SetSelection 0,28 @@ hightlight id_;_984884_;_script infofile_;_ZIP::ssf367.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "RT-pharmaceutical-combined" @@ hightlight id_;_984884_;_script infofile_;_ZIP::ssf368.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn @@ hightlight id_;_984884_;_script infofile_;_ZIP::ssf369.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back @@ hightlight id_;_984428_;_script infofile_;_ZIP::ssf370.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click
End Function

Function PharmaceuticalTest
	
'click RT-v4.0.10 link
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction")_;_script infofile_;_ZIP::ssf373.xml_;_

'load file RT-pharmaceutical-combined.hcsc
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\RT-pharmaceutical-combined.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf374.xml_;_
wait(4)

'check Dossier Type is Pharmaceutical
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Check CheckPoint("dossier_type_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf376.xml_;_

'check Company ID is 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Check CheckPoint("company_id_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf378.xml_;_

'check Dossier ID to 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Check CheckPoint("dossier_id_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier id 18")_;_script infofile_;_ZIP::ssf379.xml_;_

'check Product Name is PRODUCT
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Check CheckPoint("prod_name_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod name 18")_;_script infofile_;_ZIP::ssf380.xml_;_

'check will the submission be signed/filed by a third party is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Check CheckPoint("is_signed_3rd_party_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is signed 3rd party 18")_;_script infofile_;_ZIP::ssf381.xml_;_

'check was this regulatory activity approved for priority review is Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_priority_18").Check CheckPoint("is_priority_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is priority 18")_;_script infofile_;_ZIP::ssf382.xml_;_

'check was this regulatory activity approved for NOC/C review is Yes
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_noc_18").Check CheckPoint("is_noc_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is noc 18")_;_script infofile_;_ZIP::ssf383.xml_;_

'check is this regulatory activity an Administrative Submission is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_admin_submission_18").Check CheckPoint("is_admin_submission_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is admin submission 18")_;_script infofile_;_ZIP::ssf384.xml_;_

'check Control Number is 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Check CheckPoint("control_num_63") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control num 60")_;_script infofile_;_ZIP::ssf385.xml_;_

'check Regulatory Activity Lead is Consumer Health Product
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Check CheckPoint("activity_lead_63") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity lead 60")_;_script infofile_;_ZIP::ssf386.xml_;_

'check Regulatory Activity Type is ANDS
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Check CheckPoint("reg_activity_type_63") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg activity type 60")_;_script infofile_;_ZIP::ssf387.xml_;_

'check Regulatory Transaction Description is Administrative
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Check CheckPoint("sequence_type_63") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence type 60")_;_script infofile_;_ZIP::ssf388.xml_;_

'check Name of Regulatory Project Manager 1 is John McCain
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Check CheckPoint("projectManager1_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1")_;_script infofile_;_ZIP::ssf389.xml_;_

'check Name of Regulatory Project Manager 2 is George McClellen
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Check CheckPoint("projectManager2_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2")_;_script infofile_;_ZIP::ssf390.xml_;_

'check are new or revised fees associated with this transaction is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_fee_transaction_18").Check CheckPoint("is_fee_transaction_20") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is fee transaction 18")_;_script infofile_;_ZIP::ssf391.xml_;_

'check Company Name is Bort Industries
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Check CheckPoint("company_noabbrev_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company noabbrev 18")_;_script infofile_;_ZIP::ssf392.xml_;_

'check Street Address is 1234 Fake Street
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Check CheckPoint("STREET_91") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET 88")_;_script infofile_;_ZIP::ssf393.xml_;_

'check City or Town is Cincinnati
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Check CheckPoint("CITY_91") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY 88")_;_script infofile_;_ZIP::ssf394.xml_;_

'check Country is Rwanda
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Check CheckPoint("COUNTRY_91") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY 88")_;_script infofile_;_ZIP::ssf395.xml_;_

'check Province or State is Umbottabad
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Check CheckPoint("proveState_90") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState 88")_;_script infofile_;_ZIP::ssf396.xml_;_

'check Postal Code is N7B6V5
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Check CheckPoint("postal_90") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal 88")_;_script infofile_;_ZIP::ssf397.xml_;_

'check First Name is Howard Dean
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Check CheckPoint("firstName_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName 599")_;_script infofile_;_ZIP::ssf398.xml_;_

'check Initials is A
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Check CheckPoint("initials_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials")_;_script infofile_;_ZIP::ssf399.xml_;_

'check Last Name is Johnson
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Check CheckPoint("lastName_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName 599")_;_script infofile_;_ZIP::ssf400.xml_;_

'check Language of Correspondence is English 
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Check CheckPoint("langCorrespond_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond 599")_;_script infofile_;_ZIP::ssf401.xml_;_

'check Job Title is Assisstant shoeshiner
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Check CheckPoint("jobTitle_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf402.xml_;_

'check Phone Number is 5138677711
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Check CheckPoint("phoneNumber_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber 599")_;_script infofile_;_ZIP::ssf403.xml_;_

'check Phone Extension is 123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Check CheckPoint("phoneExt_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt 599")_;_script infofile_;_ZIP::ssf404.xml_;_

'check Fax Number is 0000000000001
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Check CheckPoint("fax_number_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax number 599")_;_script infofile_;_ZIP::ssf405.xml_;_

'check Email is thesupersalesman@gmail.com
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Check CheckPoint("contactEmail_602") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf406.xml_;_

'check regulatory activity contact information checbox is checked
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Check CheckPoint("confirm_contact_valid_21") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm contact valid 18")_;_script infofile_;_ZIP::ssf407.xml_;_

'check Privacy Notice Statement checkbox is checked
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf408.xml_;_
	
End Function



Function clinicalTrialScenario
	
'click RT v4.0.10 link
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier type 18")_;_script infofile_;_ZIP::ssf411.xml_;_

'set Dossier Type to Clinical Trial
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Select "Clinical Trial" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier type 18")_;_script infofile_;_ZIP::ssf415.xml_;_

'set Company ID to 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company id 18")_;_script infofile_;_ZIP::ssf416.xml_;_

'set Dossier ID to 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Set "1234567" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier id 18")_;_script infofile_;_ZIP::ssf417.xml_;_

'set Product Name to MYPRODUCT
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Set "MYPRODUCT" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod name 18")_;_script infofile_;_ZIP::ssf418.xml_;_

'set Protocol Number to 167711
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_protocol_18").Set "167711" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod protocol 18")_;_script infofile_;_ZIP::ssf419.xml_;_

'set will the submission be signed/filed by a third party to No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is signed 3rd party 18")_;_script infofile_;_ZIP::ssf420.xml_;_

'set Control Number to 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Set "123456" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity lead 60")_;_script infofile_;_ZIP::ssf422.xml_;_

'set Regulatory Activity Lead to Pharmaceutical
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Select "Pharmaceutical" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity lead 60")_;_script infofile_;_ZIP::ssf423.xml_;_

'set Regulatory Activity Type to CTA
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Select "CTA (Clinical Trial Application)" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg activity type 60")_;_script infofile_;_ZIP::ssf424.xml_;_

'set Regulatory Transaction Description to Administrative
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Select "Administrative" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1")_;_script infofile_;_ZIP::ssf427.xml_;_

'set Name of Regulatory Project Manager to Robert Lee
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Set "Robert Lee" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2")_;_script infofile_;_ZIP::ssf429.xml_;_

'set Name of Regulatory Project Manager to Stonewall Jackson
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Set "Stonewall Jackson" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company noabbrev 18")_;_script infofile_;_ZIP::ssf432.xml_;_

'set Company Name to Southern Crackers
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Set "Southern Crackers" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET 88")_;_script infofile_;_ZIP::ssf437.xml_;_

'set Street Address to 123 Fake Street
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Set "123 Fake Street"

'set City or Town to Washington DC
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Set "Washington DC"

'set Country to France
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Set "France"

'set Province or State to Champaigne
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Set "Champaigne"

'set Postal Code to J7B6V5
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Set "J7B6V5" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal 88")_;_script infofile_;_ZIP::ssf445.xml_;_

'set First Name to Ulysses
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Set "Ulysses" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName 599")_;_script infofile_;_ZIP::ssf446.xml_;_

'set Initials to S
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Set "S" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials")_;_script infofile_;_ZIP::ssf447.xml_;_

'set Last Name to Grant
Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("lastName_599").Set "Grant" @@ hightlight id_;_Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("lastName 599")_;_script infofile_;_ZIP::ssf448.xml_;_

'set Language of Correspondence to English
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Select "English" @@ hightlight id_;_Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf450.xml_;_

'set Job Title to President
Browser("Dev REP forms").WinObject("Frame Tab").Page("Regulatory Transaction").WebEdit("jobTitle_599").Set "President"

'set Phone Number to 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Set "123123123"

'set Phone Extension to 123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Set "123" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt 599")_;_script infofile_;_ZIP::ssf453.xml_;_

'set Fax Number to 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Set "123123123" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf461.xml_;_

'set Email to facebook
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Set "facebook@hotmail.com" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf462.xml_;_

'check regulatory activity contact information confirmation checkbox
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm contact valid 18")_;_script infofile_;_ZIP::ssf463.xml_;_

'check the Privacy Notice Statement checkbox
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf464.xml_;_

'click the Save Working Copy button
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf465.xml_;_

'save the file as RT-clinicalTrial-combined
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_1888143136_;_script infofile_;_ZIP::ssf466.xml_;_
wait(4)
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").SetSelection 0,28 @@ hightlight id_;_1574768_;_script infofile_;_ZIP::ssf467.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "RT-clinicalTrial-combined" @@ hightlight id_;_1574768_;_script infofile_;_ZIP::ssf468.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn @@ hightlight id_;_1574768_;_script infofile_;_ZIP::ssf469.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back @@ hightlight id_;_524756_;_script infofile_;_ZIP::ssf470.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click @@ hightlight id_;_2557742_;_script infofile_;_ZIP::ssf471.xml_;_
Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction").Click
End Function


Function clinicalTrialTest
 @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction")_;_script infofile_;_ZIP::ssf502.xml_;_
'load file RT-clinicalTrial-combined.hcsc
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\RT-clinicalTrial-combined.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf503.xml_;_
wait(3)
	
'check Dossier Type is Clinical Trial
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier_type_18").Check CheckPoint("dossier_type_23") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("dossier type 18")_;_script infofile_;_ZIP::ssf473.xml_;_

'check Company ID is 12345
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_id_18").Check CheckPoint("company_id_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company id 18")_;_script infofile_;_ZIP::ssf474.xml_;_

'check Dossier ID is 1234567
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier_id_18").Check CheckPoint("dossier_id_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("dossier id 18")_;_script infofile_;_ZIP::ssf475.xml_;_

'check Product Name is MYPRODUCT
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_name_18").Check CheckPoint("prod_name_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod name 18")_;_script infofile_;_ZIP::ssf476.xml_;_

'check Protocol Number is 167711
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod_protocol_18").Check CheckPoint("prod_protocol_18") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("prod protocol 18")_;_script infofile_;_ZIP::ssf477.xml_;_

'check will the submission be signed/filed by a third party is No
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is_signed_3rd_party_18").Check CheckPoint("is_signed_3rd_party_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebRadioGroup("is signed 3rd party 18")_;_script infofile_;_ZIP::ssf478.xml_;_

'check Control Number is 123456
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control_num_60").Check CheckPoint("control_num_64") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control num 60")_;_script infofile_;_ZIP::ssf479.xml_;_

'check Regulatory Activity Lead is Pharmceutical Activity Lead
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity_lead_60").Check CheckPoint("activity_lead_64") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("activity lead 60")_;_script infofile_;_ZIP::ssf480.xml_;_

'check Regulatory Activity Type is CTA
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg_activity_type_60").Check CheckPoint("reg_activity_type_64") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("reg activity type 60")_;_script infofile_;_ZIP::ssf481.xml_;_

'check Regulatory Transaction Description is Administrative
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence_type_60").Check CheckPoint("sequence_type_64") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("sequence type 60")_;_script infofile_;_ZIP::ssf482.xml_;_

'check Name of Regulatory Project Manager 1 is Robert Lee
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1").Check CheckPoint("projectManager1_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager1")_;_script infofile_;_ZIP::ssf483.xml_;_

'check Name of Regulatory Project Manager 2 is Stonewall Jackson
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2").Check CheckPoint("projectManager2_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("projectManager2")_;_script infofile_;_ZIP::ssf484.xml_;_

'check Company Name is Southern Crackers 
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company_noabbrev_18").Check CheckPoint("company_noabbrev_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("company noabbrev 18")_;_script infofile_;_ZIP::ssf485.xml_;_

'check Street Address is 123 Fake Street
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET_88").Check CheckPoint("STREET_92") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("STREET 88")_;_script infofile_;_ZIP::ssf486.xml_;_

'check City or Town is Washington DC
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY_88").Check CheckPoint("CITY_92") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("CITY 88")_;_script infofile_;_ZIP::ssf487.xml_;_

'check Country is France
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY_88").Check CheckPoint("COUNTRY_92") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("COUNTRY 88")_;_script infofile_;_ZIP::ssf488.xml_;_

'check Province or State is Champaigne
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState_88").Check CheckPoint("proveState_91") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("proveState 88")_;_script infofile_;_ZIP::ssf489.xml_;_

'check Postal Code is J7B6V5
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal_88").Check CheckPoint("postal_91") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("postal 88")_;_script infofile_;_ZIP::ssf490.xml_;_

'check First Name is Ulysses
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName_599").Check CheckPoint("firstName_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("firstName 599")_;_script infofile_;_ZIP::ssf491.xml_;_

'check Initials is S
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials").Check CheckPoint("initials_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("initials")_;_script infofile_;_ZIP::ssf492.xml_;_

'check Last Name is Grant
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName_599").Check CheckPoint("lastName_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("lastName 599")_;_script infofile_;_ZIP::ssf493.xml_;_

'check Language of Correspondence is English
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond_599").Check CheckPoint("langCorrespond_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebList("langCorrespond 599")_;_script infofile_;_ZIP::ssf494.xml_;_

'check Job Title is President
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle_599").Check CheckPoint("jobTitle_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("jobTitle 599")_;_script infofile_;_ZIP::ssf495.xml_;_

'check Phone Number is 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber_599").Check CheckPoint("phoneNumber_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneNumber 599")_;_script infofile_;_ZIP::ssf496.xml_;_

'check Phone Extension is 123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt_599").Check CheckPoint("phoneExt_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("phoneExt 599")_;_script infofile_;_ZIP::ssf497.xml_;_

'check Fax Number is 123123123
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax_number_599").Check CheckPoint("fax_number_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("fax number 599")_;_script infofile_;_ZIP::ssf498.xml_;_

'check Email is facebook.2@hotmail.com
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail_599").Check CheckPoint("contactEmail_603") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("contactEmail 599")_;_script infofile_;_ZIP::ssf499.xml_;_

'check regulatory activity contact information confirmation checkbox is not set
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm_contact_valid_18").Check CheckPoint("confirm_contact_valid_22") @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("confirm contact valid 18")_;_script infofile_;_ZIP::ssf500.xml_;_

'check Privacy Notice Statement checkbox is not set
Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_7")

End Function

biologicScenario()
biologicTest()
 @@ hightlight id_;_Browser("Dev REP forms").Page("Regulatory Transaction Template: Regulatory Enrolment Process - Canada.ca").WebEdit("control num 60")_;_script infofile_;_ZIP::ssf175.xml_;_
'veterinaryScenario()
'veterinaryTest()

'pharmaceuticalScenario()
'pharmaceuticalTest()

'clinicalTrialScenario()
'clinicalTrialTest() @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction Template - External (Nov 20, 2019, v4.0.15)")_;_script infofile_;_ZIP::ssf222.xml_;_
