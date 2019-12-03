'open CO v4.0.1
Browser("Dev REP forms").Page("Dev REP forms").Link("Company Enrolment - External").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Company Enrolment - External")_;_script infofile_;_ZIP::ssf16.xml_;_

'set Company Name to Flancrest Enterprises
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COMPANYNAME_94").Set "Flancrest Enterprises" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COMPANYNAME 94")_;_script infofile_;_ZIP::ssf17.xml_;_

'set Street Address to 743 Evergreen Terrace
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("STREET_112").Set "743 Evergreen Terrace" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("STREET 112")_;_script infofile_;_ZIP::ssf18.xml_;_

'set City or Town to Springfield
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("CITY_112").Set "Springfield" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("CITY 112")_;_script infofile_;_ZIP::ssf19.xml_;_

'set Country to United States of America
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COUNTRY_112").Set "United States of America" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COUNTRY 112")_;_script infofile_;_ZIP::ssf20.xml_;_

'set State to Illinois
Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("state_112").Select "Illinois" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("state 112")_;_script infofile_;_ZIP::ssf22.xml_;_

'set Zip Code to 12345
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("zip_112").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("zip 112")_;_script infofile_;_ZIP::ssf23.xml_;_

'check the following boxes:
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("manufacturer_623").Set "ON" 'manufacturer/sponsor mailing address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("manufacturer 623")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("Billing Address").Click 'billing address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("Billing Address")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("billing_623").Set "ON" 'regulatory mailing/annual contact address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("billing 623")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("mailing_623").Set "ON" 'canadian importer mailing address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("mailing 623")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebButton("Save Record_2").Click 'click Save Record for Address Information @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebButton("Save Record 2")_;_script infofile_;_ZIP::ssf28.xml_;_

'set First Name to Jon
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("firstName_672").Set "Jon" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("firstName 672")_;_script infofile_;_ZIP::ssf29.xml_;_

'set Last Name to Snow
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("lastName_672").Set "Snow" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("lastName 672")_;_script infofile_;_ZIP::ssf30.xml_;_

'set Language of Correspondence to English
Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("langCorrespond_672").Select "English" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("langCorrespond 672")_;_script infofile_;_ZIP::ssf31.xml_;_

'set Job Title to Lord Commander
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("jobTitle_672").Set "Lord Commander" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("jobTitle 672")_;_script infofile_;_ZIP::ssf32.xml_;_

'set Phone Number to 123123123
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("phoneNumber_672").Set "123123123" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("phoneNumber 672")_;_script infofile_;_ZIP::ssf33.xml_;_

'set Fax Number
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("fax_number_672").Set "123123123" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("fax number 672")_;_script infofile_;_ZIP::ssf34.xml_;_

'set Email to fakeemail@gmail.com
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("contactEmail_672").Set "fakeemail@gmail.com" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("contactEmail 672")_;_script infofile_;_ZIP::ssf35.xml_;_

'check the following boxes:
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactManufacturer_624").Set "ON" 'manufacturer/sponsor contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactManufacturer 624")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactBilling_624").Set "ON" 'billing contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactBilling 624")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("repPrimary_624").Set "ON" 'regulatory mailing/annual contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("repPrimary 624")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactMailing_624").Set "ON" 'primary regulatory enrolment process contact
Browser("Dev REP forms").Page("Company Template: Regulatory").WebButton("Save Record").Click 'click Save Record for Comapany Representative Information @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebButton("Save Record")_;_script infofile_;_ZIP::ssf40.xml_;_

'set the Pricavu Statement to ON
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf41.xml_;_

'click Save Working Copy button
Browser("Dev REP forms").Page("Company Template: Regulatory").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf42.xml_;_
wait(4)

'save the file as CO-v4.0.1.hcsc
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_1928280856_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").SetSelection 0,19 @@ hightlight id_;_132506_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "CO-v4.0.1" @@ hightlight id_;_132506_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn  @@ hightlight id_;_132506_;_script infofile_;_ZIP::ssf46.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click @@ hightlight id_;_198070_;_script infofile_;_ZIP::ssf48.xml_;_

'click the link for CO v4.0.1
Browser("Dev REP forms").Page("Dev REP forms").Link("Company Enrolment - External").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Company Enrolment - External")_;_script infofile_;_ZIP::ssf49.xml_;_
wait(4)

'load file CO0v4.0.1.hcsc
Browser("Dev REP forms").Page("Company Template: Regulatory").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\CO-v4.0.1.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf50.xml_;_
wait(4)

'click the dropdown tab
Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("WebElement").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("WebElement")_;_script infofile_;_ZIP::ssf51.xml_;_

'company name - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COMPANYNAME_712").Check CheckPoint("COMPANYNAME_712") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COMPANYNAME 712")_;_script infofile_;_ZIP::ssf52.xml_;_

'street address - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("STREET_715").Check CheckPoint("STREET_715") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("STREET 715")_;_script infofile_;_ZIP::ssf53.xml_;_

'city or town - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("CITY_715").Check CheckPoint("CITY_715") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("CITY 715")_;_script infofile_;_ZIP::ssf54.xml_;_

'country - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COUNTRY_715").Check CheckPoint("COUNTRY_715") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("COUNTRY 715")_;_script infofile_;_ZIP::ssf55.xml_;_

'state - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("state_715").Check CheckPoint("state_715") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("state 715")_;_script infofile_;_ZIP::ssf56.xml_;_

'zip code - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("zip_715").Check CheckPoint("zip_715") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("WebElement")_;_script infofile_;_ZIP::ssf61.xml_;_

'company role checkpoints:
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("manufacturer_719").Check CheckPoint("manufacturer_719") 'manufacturer/sponsor mailing address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("manufacturer 719")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("billing_719").Check CheckPoint("billing_719") 'billing address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("billing 719")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("mailing_719").Check CheckPoint("mailing_719") 'regulatory mailing/annual contact address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("mailing 719")_;_script infofile_;_ZIP::ssf64.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("importer").Check CheckPoint("importer") 'canadian importer mailing address @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("importer")_;_script infofile_;_ZIP::ssf65.xml_;_

'click the dropdown for Company Representative Information tab
Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("WebElement_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf66.xml_;_

'first name - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("firstName_1028").Check CheckPoint("firstName_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("firstName 1028")_;_script infofile_;_ZIP::ssf67.xml_;_

'initials - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("initials").Check CheckPoint("initials") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("initials")_;_script infofile_;_ZIP::ssf68.xml_;_

'last name - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("lastName_1028").Check CheckPoint("lastName_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("lastName 1028")_;_script infofile_;_ZIP::ssf69.xml_;_

'language of correspondence - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("langCorrespond_1028").Check CheckPoint("langCorrespond_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebList("langCorrespond 1028")_;_script infofile_;_ZIP::ssf70.xml_;_

'job title - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("jobTitle_1028").Check CheckPoint("jobTitle_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("jobTitle 1028")_;_script infofile_;_ZIP::ssf71.xml_;_

'phone number - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("phoneNumber_1028").Check CheckPoint("phoneNumber_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("phoneNumber 1028")_;_script infofile_;_ZIP::ssf72.xml_;_

'phone extension - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("phoneExt_1028").Check CheckPoint("phoneExt_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("phoneExt 1028")_;_script infofile_;_ZIP::ssf73.xml_;_

'fax number - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("fax_number_1028").Check CheckPoint("fax_number_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("fax number 1028")_;_script infofile_;_ZIP::ssf74.xml_;_

'email - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("contactEmail_1028").Check CheckPoint("contactEmail_1028") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebEdit("contactEmail 1028")_;_script infofile_;_ZIP::ssf75.xml_;_

'Roles for this company representative checkpoints:
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactManufacturer_1035").Check CheckPoint("contactManufacturer_1035") 'manufacturer/sponsor contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactManufacturer 1035")_;_script infofile_;_ZIP::ssf76.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactMailing_1035").Check CheckPoint("contactMailing_1035") 'regulatory mailing/annual contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactMailing 1035")_;_script infofile_;_ZIP::ssf77.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactBilling_1035").Check CheckPoint("contactBilling_1035") 'billing contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("contactBilling 1035")_;_script infofile_;_ZIP::ssf78.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("repPrimary_1035").Check CheckPoint("repPrimary_1035") 'primary regulatory enrolment process contct @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("repPrimary 1035")_;_script infofile_;_ZIP::ssf79.xml_;_
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("repSecondary_1035").Check CheckPoint("repSecondary_1035") 'alternative regulatory enrolment process contact @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("repSecondary 1035")_;_script infofile_;_ZIP::ssf80.xml_;_

'privacy statement - checkpoint
Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Company Template: Regulatory").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf81.xml_;_
