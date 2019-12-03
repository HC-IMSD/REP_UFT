Function biologicScenario
	
	
'click on the link for PI v4.0.3
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf1.xml_;_

'set Company ID to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company id 3")_;_script infofile_;_ZIP::ssf2.xml_;_

'set Dossier ID to 1234567
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Set "1234567" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier id 3")_;_script infofile_;_ZIP::ssf3.xml_;_

'set Dossier Type to Biologic
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Select "Biologic" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf4.xml_;_

'set Product Name to MYPRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Set "MYPRODUCT" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod name 3")_;_script infofile_;_ZIP::ssf5.xml_;_

'set Proper, Common, or Non-Proprietary Name to H2WOOAAH
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Set "H2WOOAAH" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper name 3")_;_script infofile_;_ZIP::ssf6.xml_;_

'set Manufacturer/Sponsor to YES
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid")_;_script infofile_;_ZIP::ssf7.xml_;_

'set Contact for this Regulatory Activity to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity")_;_script infofile_;_ZIP::ssf8.xml_;_

'set Regulatory Mailing/Annual Contact to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid")_;_script infofile_;_ZIP::ssf9.xml_;_

'click Add Importer button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Importer").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Importer")_;_script infofile_;_ZIP::ssf10.xml_;_

'set Importer Company ID to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid_919").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid 919")_;_script infofile_;_ZIP::ssf11.xml_;_

'set Importer Company Name to Table Time
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer_company_name_919").Set "Table Time" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer company name 919")_;_script infofile_;_ZIP::ssf12.xml_;_

'set Street Address to 12345 Fake Street
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET_919").Set "12345 Fake Street" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET 919")_;_script infofile_;_ZIP::ssf13.xml_;_

'set City or Town to Minneapolis
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY_919").Set "Minneapolis" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY 919")_;_script infofile_;_ZIP::ssf14.xml_;_

'set Province to Nunavut
Browser("Dev REP forms").Page("Product Information Template:").WebList("province_919").Select "Nunavut" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("province 919")_;_script infofile_;_ZIP::ssf15.xml_;_

'set Postal Code to L9K 8J7
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal_919").Set "L9K 8J7" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal 919")_;_script infofile_;_ZIP::ssf16.xml_;_

'click Save Record for Importer
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record")_;_script infofile_;_ZIP::ssf17.xml_;_

'set Drug Use to Human
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Select "Human" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf18.xml_;_

'set on the Prescription Drug List to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList")_;_script infofile_;_ZIP::ssf19.xml_;_

'set Proposed Indication/Use/Dosage to 50 mL a day
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Set "50 mL a day" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop Indication 3")_;_script infofile_;_ZIP::ssf20.xml_;_

'set Formulation Name to myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Set "myMix" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf21.xml_;_

'set Dosage Form to ELIXER
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_115").Set "ELIXIR" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 115")_;_script infofile_;_ZIP::ssf22.xml_;_

'set Role to Medicinal Ingredient
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_422").Select "Medicinal Ingredient" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("typeahead-950-6180")_;_script infofile_;_ZIP::ssf24.xml_;_

'set Ingredient Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_422").Set "HYDROCHLORIC ACID"

'set Chemical Abstract Services to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf26.xml_;_

'set Standard to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf27.xml_;_

'set Operator to Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_422").Select "Equals" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 422")_;_script infofile_;_ZIP::ssf28.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_422").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength VALUE 422")_;_script infofile_;_ZIP::ssf29.xml_;_

'set Units to MCMOL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_422").Set "MCMOL" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 422")_;_script infofile_;_ZIP::ssf30.xml_;_

'set Per to Unit of Presentation
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_422").Select "Unit of Presentation" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 422")_;_script infofile_;_ZIP::ssf31.xml_;_

'set Unit of Presentation to ECT
Browser("Dev REP forms").Page("Product Information Template:").WebList("unit_presentation_422").Select "ECT" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("unit presentation 422")_;_script infofile_;_ZIP::ssf32.xml_;_

'set Calculated as Base to No, my ingredient is supplied as salt, and calculated as a salt
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_422").Select "No, my ingredient is supplied as a salt, and calculated as a salt" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 422")_;_script infofile_;_ZIP::ssf33.xml_;_

'set Is this a nanomaterial to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_422").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is nano material 422")_;_script infofile_;_ZIP::ssf34.xml_;_

'set Animal or Human Sourced to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_422").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Please provide additional")_;_script infofile_;_ZIP::ssf36.xml_;_

'click Save Record for Formulation 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 2")_;_script infofile_;_ZIP::ssf688.xml_;_

'click Save Record for Ingredient Details 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 2")_;_script infofile_;_ZIP::ssf37.xml_;_

'set was Animal and/or Human Sourced Material to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_115").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is animal human material 115")_;_script infofile_;_ZIP::ssf38.xml_;_

'set Container Type to Tupperware
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_435").Set "Tupperware" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container type 435")_;_script infofile_;_ZIP::ssf39.xml_;_

'set Package Size to 125 mL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_435").Set "125 mL" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 435")_;_script infofile_;_ZIP::ssf40.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_435").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 435")_;_script infofile_;_ZIP::ssf41.xml_;_

'set Unit to Months
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_435").Select "Months" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 435")_;_script infofile_;_ZIP::ssf42.xml_;_

'set Minimum, Celsius to -273
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_435").Set "-273" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min temp 435")_;_script infofile_;_ZIP::ssf43.xml_;_

'set Maximum, Celsius to -272
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_435").Set "-272" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max temp 435")_;_script infofile_;_ZIP::ssf44.xml_;_

'set Other Shelf Life Considerations to Do not Ingest.
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration").Set "Do not ingest." @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other shelf life consideration")_;_script infofile_;_ZIP::ssf45.xml_;_

'click Save Record for Container Types, Package Size and Shelf Life
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_3").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 3")_;_script infofile_;_ZIP::ssf46.xml_;_

'set Route of Administration to DIALYSIS
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_455").Set "DIALYSIS" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa lbl 455")_;_script infofile_;_ZIP::ssf47.xml_;_

'click Save Record for Route of Administration
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_4").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 4")_;_script infofile_;_ZIP::ssf48.xml_;_

'set Country of Manufacture to Aland Islands
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_642").Set "Åland Islands" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 642")_;_script infofile_;_ZIP::ssf49.xml_;_

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf50.xml_;_

'click Add Ingredient/Material button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material")_;_script infofile_;_ZIP::ssf51.xml_;_

'set Ingredient or Material Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1656").Set "HYDROCHLORIC ACID"

'set Source From Human
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human")_;_script infofile_;_ZIP::ssf53.xml_;_

'set System to Reproductive and urinary systems
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_1301").Select "Reproductive and urinary systems" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("system type 1301")_;_script infofile_;_ZIP::ssf54.xml_;_

'set Kidney to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney")_;_script infofile_;_ZIP::ssf55.xml_;_

'click Save Record for Ingreient Material 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_5").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 5")_;_script infofile_;_ZIP::ssf56.xml_;_

'click Privacy Notice Statement checkbox
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf57.xml_;_

'click Save Working Copy button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf58.xml_;_
wait(4)

'save the file as PI-biologic-combined
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_1888139824_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").SetSelection 0,28 @@ hightlight id_;_4785386_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "PI-biologic-combined" @@ hightlight id_;_4785386_;_script infofile_;_ZIP::ssf61.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn @@ hightlight id_;_4785386_;_script infofile_;_ZIP::ssf62.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back @@ hightlight id_;_3212490_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click @@ hightlight id_;_198558_;_script infofile_;_ZIP::ssf64.xml_;_
End Function


Function biologicTest
 @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Regulatory Transaction")_;_script infofile_;_ZIP::ssf65.xml_;_
 'click the link for PI-biologic-combined
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf66.xml_;_

'load file PI-biologic-combined.hcsc
Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\PI-biologic-combined.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf68.xml_;_
wait(4)

'check Company ID is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Check CheckPoint("company_id_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf70.xml_;_

'check Dossier ID is 1234567
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Check CheckPoint("dossier_id_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf72.xml_;_

'check Dossier Type is Biologic
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Check CheckPoint("dossier_type_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf74.xml_;_

'check Product Name is MYPRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Check CheckPoint("prod_name_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf76.xml_;_

'check Proper, Common or Non-Proprietary Name is H2WOOAAH
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Check CheckPoint("proper_name_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf78.xml_;_

'check Manufacturer/Sponsor is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid").Check CheckPoint("manuid") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf80.xml_;_

'check Contact for this Regulatory Activity is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity").Check CheckPoint("thisActivity") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf82.xml_;_

'check Regulatory Mailing/Annual Contact is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid").Check CheckPoint("maillingid") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf84.xml_;_

'check Canadian Importer is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("importeraddr").Check CheckPoint("importeraddr") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf86.xml_;_

'click Importer drop down tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement").Click
wait(3)

'check Importer Company ID is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid_1677").Check CheckPoint("importerid_1677")

'check Importer Company Name is Table Time
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer_company_name_1683").Check CheckPoint("importer_company_name_1677")

'check Street Address is 12345 Fake Street
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET_1677").Check CheckPoint("STREET_1677")

'check City or Town is Minneapolis
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY_1677").Check CheckPoint("CITY_1677") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY 1677")_;_script infofile_;_ZIP::ssf91.xml_;_

'check Province is Nunavut
Browser("Dev REP forms").Page("Product Information Template:").WebList("province_1677").Check CheckPoint("province_1677") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("province 1677")_;_script infofile_;_ZIP::ssf92.xml_;_

'check Postal COde is L9K 8J7
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal_1677").Check CheckPoint("postal_1677") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal 1677")_;_script infofile_;_ZIP::ssf93.xml_;_

'check Drug Use is Human
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Check CheckPoint("drug_use_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf94.xml_;_

'check included in Schedule C is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC").Check CheckPoint("isScheduleC") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC")_;_script infofile_;_ZIP::ssf95.xml_;_

'check included in Schedule D is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD").Check CheckPoint("isScheduleD") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD")_;_script infofile_;_ZIP::ssf96.xml_;_

'check On the Prescription Drug List is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Check CheckPoint("isPrescriptionDrugList") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList")_;_script infofile_;_ZIP::ssf97.xml_;_

'check regulated under the Controlled Drugs and Substances Act is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA").Check CheckPoint("isRegulatedCDSA") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA")_;_script infofile_;_ZIP::ssf98.xml_;_

'check is a non-prescription drug is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isNonPrescriptionDrug").Check CheckPoint("isNonPrescriptionDrug") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isNonPrescriptionDrug")_;_script infofile_;_ZIP::ssf99.xml_;_

'check a non-prescription drug to which one or more Schedule A claims apply is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA").Check CheckPoint("isScheduleA") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA")_;_script infofile_;_ZIP::ssf100.xml_;_

'check Proposed Indication/Use/Dosage is 50 mL a day
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Check CheckPoint("prop_Indication_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop Indication 3")_;_script infofile_;_ZIP::ssf101.xml_;_

'click Formulation drop down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf102.xml_;_

'check Formulation Name is myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Check CheckPoint("formulationName") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf103.xml_;_

'check Dosage Form is ELIXIR
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_912").Check CheckPoint("dosage_form_906")

'click Ingredient Details dropdown
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_3").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 3")_;_script infofile_;_ZIP::ssf105.xml_;_

'check Role is Medicinal Ingredient
'Updated by test maintenance run
'Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role").Check CheckPoint("ing_role_1485")
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_1491").Check CheckPoint("ing_role_1485")

'check Ingredient Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_1491").Check CheckPoint("ing_name_1485")

'check Chemical Abstract Services is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Check CheckPoint("casNum") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf108.xml_;_

'check Standard is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Check CheckPoint("standardVal") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf109.xml_;_

'check Operator is Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_1485").Check CheckPoint("strength_operator_1491") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 1485")_;_script infofile_;_ZIP::ssf110.xml_;_


'check Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_1491").Check CheckPoint("strength_VALUE_1485")

'check Units is MCMOL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_1485").Check CheckPoint("units_1485") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 1485")_;_script infofile_;_ZIP::ssf112.xml_;_

'check Per is Unit of Presentation
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_1485").Check CheckPoint("per_strength_1485") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 1485")_;_script infofile_;_ZIP::ssf113.xml_;_

'check Unit of Presentation is ECT
Browser("Dev REP forms").Page("Product Information Template:").WebList("unit_presentation_1485").Check CheckPoint("unit_presentation_1485") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("unit presentation 1485")_;_script infofile_;_ZIP::ssf114.xml_;_

'check Calculated as Base is No, my ingredient is supplied as a salt, and calculated as a salt
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_1485").Check CheckPoint("calculated_as_base_1485") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 1485")_;_script infofile_;_ZIP::ssf115.xml_;_

'check Is this a nanomaterial is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_1491").Check CheckPoint("is_nano_material_1485")

'check Animal or Human Sourced is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_1491").Check CheckPoint("animal_human_sourced_1485")

'check was animal and/or Human Sourced Material used at any other stage is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_912").Check CheckPoint("is_animal_human_material_906")

'click drop down for Container Type
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_4").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 4")_;_script infofile_;_ZIP::ssf119.xml_;_

'check Container Type is Tupperware
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_1492").Check CheckPoint("container_type_1486")

'check Package Size is 125 mL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_1486").Check CheckPoint("package_size_1486") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 1486")_;_script infofile_;_ZIP::ssf121.xml_;_

'check Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_1486").Check CheckPoint("shelf_life_number_1486") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 1486")_;_script infofile_;_ZIP::ssf122.xml_;_

'check Unit is Months
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_1486").Check CheckPoint("shelf_life_unit_1486") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 1486")_;_script infofile_;_ZIP::ssf123.xml_;_

'check Minimum, Celsius is -273
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_1492").Check CheckPoint("min_temp_1486")

'check Maximum, Celsius is -272
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_1492").Check CheckPoint("max_temp_1486")

'check Other Shelf Life Considerations is Do not ingest.
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration_2").Check CheckPoint("other_shelf_life_considerations_1486") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other shelf life consideration 2")_;_script infofile_;_ZIP::ssf126.xml_;_

'click dropdown for Route of Administration
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_5").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 5")_;_script infofile_;_ZIP::ssf127.xml_;_

'check Route of Administration is DIALYSIS
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_1119").Check CheckPoint("roa_lbl_1113")

'click dropdown for Country of Manufacture
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_6").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 6")_;_script infofile_;_ZIP::ssf129.xml_;_

'check Country of Manufacture is Åland Islands
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1221").Check CheckPoint("country_name_1221") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1221")_;_script infofile_;_ZIP::ssf130.xml_;_

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf131.xml_;_

'click Ingredient or Material Name dropdown
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_7").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 7")_;_script infofile_;_ZIP::ssf132.xml_;_

'check Ingredient or Material Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1662").Check CheckPoint("ingred_mat_name_1656")

'check Source Human is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human").Check CheckPoint("sourced-human") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human")_;_script infofile_;_ZIP::ssf134.xml_;_

'check Source Animal is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal").Check CheckPoint("sourced-animal") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal")_;_script infofile_;_ZIP::ssf135.xml_;_

'click Tissues or Fluids sources dropdown
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_8").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 8")_;_script infofile_;_ZIP::ssf136.xml_;_

'check System is Reproductive and urinary systems
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_1724").Check CheckPoint("system_type_1724") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("system type 1724")_;_script infofile_;_ZIP::ssf137.xml_;_

'check Milk or milk products is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("milkProducts").Check CheckPoint("milkProducts") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("milkProducts")_;_script infofile_;_ZIP::ssf138.xml_;_

'check Kidney is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney").Check CheckPoint("kidney") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney")_;_script infofile_;_ZIP::ssf139.xml_;_

'check Colostrum is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("colostrum").Check CheckPoint("colostrum") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("System (required)Cardio-Respir")_;_script infofile_;_ZIP::ssf141.xml_;_

'check Mammary glands is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mammaryGlands").Check CheckPoint("mammaryGlands") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mammaryGlands")_;_script infofile_;_ZIP::ssf142.xml_;_

'check Ovaries is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("ovaries").Check CheckPoint("ovaries") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("ovaries")_;_script infofile_;_ZIP::ssf143.xml_;_

'check Placenta is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("placenta").Check CheckPoint("placenta") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("placenta")_;_script infofile_;_ZIP::ssf144.xml_;_

'check Placental Fluids is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("placentalFluid").Check CheckPoint("placentalFluid") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("placentalFluid")_;_script infofile_;_ZIP::ssf145.xml_;_

'check Semen is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("semen").Check CheckPoint("semen") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("semen")_;_script infofile_;_ZIP::ssf146.xml_;_

'check Testes is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("testes").Check CheckPoint("testes")

'check Urine is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("urine").Check CheckPoint("urine") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("urine")_;_script infofile_;_ZIP::ssf148.xml_;_

'check Other reproductive is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("reprodOther").Check CheckPoint("reprodOther") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("reprodOther")_;_script infofile_;_ZIP::ssf149.xml_;_

'click Privacy Notice Statement checkbox is checked
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf150.xml_;_

End Function


Function PharmaceuticalScenario
	
'click link for PI v4.0.3
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf151.xml_;_

'set company I Dto 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company id 3")_;_script infofile_;_ZIP::ssf152.xml_;_

'set Dossier ID to 1234556
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Set "1234556" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier id 3")_;_script infofile_;_ZIP::ssf153.xml_;_

'set Dossier Type to Pharmaceutical
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Select "Pharmaceutical" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf154.xml_;_

'set Product Name to A PRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Set "A PRODUCT" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod name 3")_;_script infofile_;_ZIP::ssf155.xml_;_

'set Proper, Common or Non-Proprietary Name to COMMON NAME
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Set "COMMON NAME" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper name 3")_;_script infofile_;_ZIP::ssf156.xml_;_

'set DNF to Manufacturer/Sponsor to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid")_;_script infofile_;_ZIP::ssf157.xml_;_

'set Regulatory Mailing/Annual Contact to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity")_;_script infofile_;_ZIP::ssf158.xml_;_

'set Contact for this Regulatory Activity to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid")_;_script infofile_;_ZIP::ssf159.xml_;_

'click Add Importer button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Importer").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Importer")_;_script infofile_;_ZIP::ssf160.xml_;_

'set Importer Company ID to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid_919").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid 919")_;_script infofile_;_ZIP::ssf161.xml_;_

'set Importer Company Name to importer
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer_company_name_919").Set "importer" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer company name 919")_;_script infofile_;_ZIP::ssf162.xml_;_

'set Street Address to 123 Fake Street
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET_919").Set "123 Fake Street" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET 919")_;_script infofile_;_ZIP::ssf163.xml_;_

'set City or Town to Jefferson
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY_919").Set "Jefferson" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY 919")_;_script infofile_;_ZIP::ssf164.xml_;_

'set Province to Northwest Territories
Browser("Dev REP forms").Page("Product Information Template:").WebList("province_919").Select "Northwest Territories" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("province 919")_;_script infofile_;_ZIP::ssf165.xml_;_

'set Postal Code to L9K 8J7
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal_919").Set "L9K 8J7" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal 919")_;_script infofile_;_ZIP::ssf166.xml_;_

'click Save Record for Importer
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record")_;_script infofile_;_ZIP::ssf167.xml_;_

'set Drug Use to Radiopharmaceutical
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Select "Radiopharmaceutical" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf168.xml_;_

'set included in Schedule C to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC")_;_script infofile_;_ZIP::ssf169.xml_;_

'set Proposed Indication/Use/Dosage to proposed indication
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Set "proposed indication" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop Indication 3")_;_script infofile_;_ZIP::ssf170.xml_;_

'set Formulation Name to myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Set "myMix" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf171.xml_;_

'set Dosage Form to AEROSOL, METERED DOSE
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_115").Set "AEROSOL, METERED DOSE" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 909")_;_script infofile_;_ZIP::ssf288.xml_;_
 @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("ing role 422")_;_script infofile_;_ZIP::ssf174.xml_;_
'set Role to Medicinal Ingredient
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_422").Select "Medicinal Ingredient" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("typeahead-950-6180")_;_script infofile_;_ZIP::ssf176.xml_;_

'set Ingredient Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_422").Set "HYDROCHLORIC ACID" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing name 422")_;_script infofile_;_ZIP::ssf177.xml_;_

'set Chemical Abstract Services to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf178.xml_;_

'set Standard to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf179.xml_;_

'set Operator to Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_422").Select "Equals" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 422")_;_script infofile_;_ZIP::ssf180.xml_;_

'set Units to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_422").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength VALUE 422")_;_script infofile_;_ZIP::ssf181.xml_;_

'set Per to ML
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_422").Set "ML" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 422")_;_script infofile_;_ZIP::ssf182.xml_;_

'set Calculated as Base to Unit of Presentation
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_422").Select "Unit of Presentation" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 422")_;_script infofile_;_ZIP::ssf183.xml_;_

'set Unit of Presentation to Dose
Browser("Dev REP forms").Page("Product Information Template:").WebList("unit_presentation_422").Select "DOSE" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("unit presentation 422")_;_script infofile_;_ZIP::ssf184.xml_;_

'set Calculated as Base to Yes, my ingredient is supplied as a base, and calculated as a base
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_422").Select "Yes, my ingredient is supplied as a base, and calculated as a base" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 422")_;_script infofile_;_ZIP::ssf185.xml_;_

'set Is this a nanomaterial to NO
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_422").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is nano material 422")_;_script infofile_;_ZIP::ssf186.xml_;_

'set Animal or Human Sourced to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_422").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal human sourced 422")_;_script infofile_;_ZIP::ssf187.xml_;_

'click Save Record for Ingredient Details 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 2")_;_script infofile_;_ZIP::ssf188.xml_;_

'set Dosage Form to AEROSOL< METERED DOSE
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_115").Set "AEROSOL, METERED DOSE" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 115")_;_script infofile_;_ZIP::ssf189.xml_;_

'set Was Animal and/or Human Sourced Material to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_115").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is animal human material 115")_;_script infofile_;_ZIP::ssf190.xml_;_

'set Container Type to Tupperware
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_435").Set "Tupperware" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container type 435")_;_script infofile_;_ZIP::ssf191.xml_;_

'set Packagea Size to 200 mL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_435").Set "200 mL" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 435")_;_script infofile_;_ZIP::ssf192.xml_;_

'set value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_435").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 435")_;_script infofile_;_ZIP::ssf193.xml_;_

'set Unit to Months
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_435").Select "Months" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 435")_;_script infofile_;_ZIP::ssf194.xml_;_

'set Minimum, Celsius to -273
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_435").Set "-273" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min temp 435")_;_script infofile_;_ZIP::ssf195.xml_;_

'set Maximum, Celsius to -272
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_435").Set "-272" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max temp 435")_;_script infofile_;_ZIP::ssf196.xml_;_

'set Other Shelf Life Considerations to Do not ingest.
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration").Set "Do not ingest."

'click Save Record for Container Type 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_3").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 3")_;_script infofile_;_ZIP::ssf198.xml_;_

'click Add Routes of Administration button
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Add Routes of Administration").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Add Routes of Administration")_;_script infofile_;_ZIP::ssf199.xml_;_

'set Route of Administration to BUCCAL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_455").Set "BUCCAL" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa lbl 455")_;_script infofile_;_ZIP::ssf200.xml_;_

'click Save Record for Route of Administration
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_4").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 4")_;_script infofile_;_ZIP::ssf201.xml_;_

'set Country of Manufacture to Andorra
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_642").Set "Andorra"

'click Save Record for Country of Manufacture
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_6").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 6")_;_script infofile_;_ZIP::ssf290.xml_;_

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf279.xml_;_

'click Add Ingredient/Material button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material")_;_script infofile_;_ZIP::ssf280.xml_;_

'set Ingredient or Material Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1136").Set "HYDROCHLORIC ACID" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred mat name 1136")_;_script infofile_;_ZIP::ssf281.xml_;_

'set Source From Human to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human")_;_script infofile_;_ZIP::ssf282.xml_;_

'set System to Reproductive and urinary systems
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_1179").Select "Reproductive and urinary systems" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("system type 1179")_;_script infofile_;_ZIP::ssf283.xml_;_

'set Kidney to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney")_;_script infofile_;_ZIP::ssf284.xml_;_

'click Save Record fro Tissues or Fluids Details 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_5").Click

'check the Privacy Notice Statement
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("By submitting your personal")_;_script infofile_;_ZIP::ssf204.xml_;_

'click Save Working Copy button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf205.xml_;_
wait(4)

'save the file as PI-Pharmaceutical-combined
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_2020913400_;_script infofile_;_ZIP::ssf206.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as" @@ hightlight id_;_525652_;_script infofile_;_ZIP::ssf207.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "PI-Pharmaceutical-combined" @@ hightlight id_;_525652_;_script infofile_;_ZIP::ssf208.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn @@ hightlight id_;_525652_;_script infofile_;_ZIP::ssf209.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back @@ hightlight id_;_984552_;_script infofile_;_ZIP::ssf210.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click

End Function


Function PharmaceuticalTest

'click link PI v4.0.3
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click

'load file PI-Pharmaceutical_combined.hcsc
Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\PI-Pharmaceutical-combined.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf213.xml_;_
wait(4)

'check Company ID is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Check CheckPoint("company_id_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf215.xml_;_

'check Dossier ID is 1234556
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Check CheckPoint("dossier_id_4")

'check Dossier Type is Pharmaceutical
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Check CheckPoint("dossier_type_4")

'check Product Name is A PRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Check CheckPoint("prod_name_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf221.xml_;_

'check Proper, Common or Non-Proprietary Name is COMMON NAME
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Check CheckPoint("proper_name_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf223.xml_;_

'check Manufacture/Sponsor is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid").Check CheckPoint("manuid_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf225.xml_;_

'check Contact for this Regulatory Activity is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity").Check CheckPoint("thisActivity_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf227.xml_;_

'check Regulatory Mailing/Annual Contact is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid").Check CheckPoint("maillingid_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf229.xml_;_

'check Canadian Importer is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("importeraddr").Check CheckPoint("importeraddr_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf231.xml_;_

'click Importer dropdown
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement")_;_script infofile_;_ZIP::ssf232.xml_;_

'check Importer Company ID is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid_1654").Check CheckPoint("importerid_1654") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid 1654")_;_script infofile_;_ZIP::ssf233.xml_;_

'check Importer Company Name is importer
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer_company_name_1654").Check CheckPoint("importer_company_name_1654") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer company name 1654")_;_script infofile_;_ZIP::ssf234.xml_;_

'check Street Address is 123 Fake Street
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET_1654").Check CheckPoint("STREET_1654")

'check City or Town is Jefferson
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY_1654").Check CheckPoint("CITY_1654") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY 1654")_;_script infofile_;_ZIP::ssf236.xml_;_

'check Province is Northwest Territories
Browser("Dev REP forms").Page("Product Information Template:").WebList("province_1654").Check CheckPoint("province_1654") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("province 1654")_;_script infofile_;_ZIP::ssf237.xml_;_

'check Postal Code is L9K 8J7
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal_1654").Check CheckPoint("postal_1654") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal 1654")_;_script infofile_;_ZIP::ssf238.xml_;_

'check Drug Use is Radiopharmaceutical
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Check CheckPoint("drug_use_4")

'check included in Schedule C is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC").Check CheckPoint("isScheduleC_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC")_;_script infofile_;_ZIP::ssf240.xml_;_

'check included in Schedule D is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD").Check CheckPoint("isScheduleD_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD")_;_script infofile_;_ZIP::ssf241.xml_;_

'check on the Prescription Drug List is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Check CheckPoint("isPrescriptionDrugList_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList")_;_script infofile_;_ZIP::ssf242.xml_;_

'check regulated under the Controlled Drugs and Substances Act is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA").Check CheckPoint("isRegulatedCDSA_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA")_;_script infofile_;_ZIP::ssf243.xml_;_

'check a non-prescription drug is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isNonPrescriptionDrug").Check CheckPoint("isNonPrescriptionDrug_2")

'check a non-prescription drug to which one or more Schedule A claims apply is No
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA").Check CheckPoint("isScheduleA_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA")_;_script infofile_;_ZIP::ssf245.xml_;_

'check Proposed Indication/Use/Dosage is proposed indication
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Check CheckPoint("prop_Indication_4")

Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_2").Click

'check Formulation Name is myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Check CheckPoint("formulationName_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf248.xml_;_

'check Dosage Form is AEROSOL, METERED DOSE
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_909").Check CheckPoint("dosage_form_909") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 909")_;_script infofile_;_ZIP::ssf249.xml_;_

'check Role is Medicinal Ingredient
'Browser("Dev REP forms").Page("Product Information Template:").WebElement("RoleIngredientFormulation").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("RoleIngredientFormulation")_;_script infofile_;_ZIP::ssf250.xml_;_
 @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 3")_;_script infofile_;_ZIP::ssf251.xml_;_


'DO NOT DELETE, THESE FIELDS DO NOT LOAD

'Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_3").Click
'Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_1479").Check CheckPoint("ing_role_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("ing role 1479")_;_script infofile_;_ZIP::ssf252.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_1479").Check CheckPoint("ing_name_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing name 1479")_;_script infofile_;_ZIP::ssf253.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Check CheckPoint("casNum_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf254.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Check CheckPoint("standardVal_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf255.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_1479").Check CheckPoint("strength_operator_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 1479")_;_script infofile_;_ZIP::ssf256.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_1479").Check CheckPoint("strength_VALUE_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength VALUE 1479")_;_script infofile_;_ZIP::ssf257.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_1479").Check CheckPoint("units_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 1479")_;_script infofile_;_ZIP::ssf258.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_1479").Check CheckPoint("per_strength_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 1479")_;_script infofile_;_ZIP::ssf259.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebList("unit_presentation_1479").Check CheckPoint("unit_presentation_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("unit presentation 1479")_;_script infofile_;_ZIP::ssf260.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_1479").Check CheckPoint("calculated_as_base_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 1479")_;_script infofile_;_ZIP::ssf261.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_1479").Check CheckPoint("is_nano_material_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is nano material 1479")_;_script infofile_;_ZIP::ssf262.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_1479").Check CheckPoint("animal_human_sourced_1479") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal human sourced 1479")_;_script infofile_;_ZIP::ssf263.xml_;_


'check Was Animal and/or Human Sourced Material is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_909").Check CheckPoint("is_animal_human_material_909") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is animal human material 909")_;_script infofile_;_ZIP::ssf264.xml_;_

'DO NOT DELETE, THESE FIELDS DO NOT LOAD

'click the drop-down for Container Type
'Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_4").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 4")_;_script infofile_;_ZIP::ssf265.xml_;_

'check Container Type is Tupperware
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_1480").Check CheckPoint("container_type_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container type 1480")_;_script infofile_;_ZIP::ssf266.xml_;_

'check Package Size is 200 mL
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_1480").Check CheckPoint("package_size_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 1480")_;_script infofile_;_ZIP::ssf267.xml_;_

'check Value is 5
'Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_1480").Check CheckPoint("shelf_life_number_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 1480")_;_script infofile_;_ZIP::ssf268.xml_;_

'check Unit is Months
'Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_1480").Check CheckPoint("shelf_life_unit_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 1480")_;_script infofile_;_ZIP::ssf269.xml_;_

'check Minimum, Celsius is -273
'Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_1480").Check CheckPoint("min_temp_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min temp 1480")_;_script infofile_;_ZIP::ssf270.xml_;_

'check Maximum, Celsius is -272
'Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_1480").Check CheckPoint("max_temp_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max temp 1480")_;_script infofile_;_ZIP::ssf271.xml_;_

'check Other Shelf Life Considerations is Do not ingest.
'Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration_3").Check CheckPoint("other_shelf_life_considerations_1480") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other shelf life consideration 3")_;_script infofile_;_ZIP::ssf272.xml_;_

'click the drop-down for Routes of Administration
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_5").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 5")_;_script infofile_;_ZIP::ssf273.xml_;_

'check Route of Administration is BUCCAL
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_1116").Check CheckPoint("roa_lbl_1116") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa lbl 1116")_;_script infofile_;_ZIP::ssf274.xml_;_

'click drop-down for Country of Manufacture
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_6").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 6")_;_script infofile_;_ZIP::ssf275.xml_;_

'check Countries of Manufacture is Andorra
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1224").Check CheckPoint("country_name_1224") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1224")_;_script infofile_;_ZIP::ssf276.xml_;_

'click human/animal sourced ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click
	
End Function


Function veterinaryScenario
'There are several errors in this script. When the script is saved and loaded into a new page, the Species and Subtypes tab doesn't load.
'The Veterinary Option in the Drug Use dropdown doesn't appear unless Dossier Type is selected to Veterinary, deselected to anything else, then selected to Veterinary again. 
'The fields in Human/Animal Sourced tab doesn't save unless, Formulations is clicked, and then go back to the Human/Animal Sourced.

'click link for PI v4.0.3
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf296.xml_;_

'set Company ID to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company id 3")_;_script infofile_;_ZIP::ssf297.xml_;_

'set Dossier ID to 1234567
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Set "1234567" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier id 3")_;_script infofile_;_ZIP::ssf298.xml_;_

'set Dossier Type to Veterinary
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Select "Veterinary" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf299.xml_;_

'set Product Name to THE PRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Set "THE PRODUCT" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod name 3")_;_script infofile_;_ZIP::ssf300.xml_;_

'set Proper, Common or Non-Proprietary Name to WELCOME
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Set "WELCOME" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Manufacturer/Sponsor")_;_script infofile_;_ZIP::ssf302.xml_;_

'set Manufacturer/Sponsor to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid")_;_script infofile_;_ZIP::ssf303.xml_;_

'set Contact for this Regulatory Activity to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity")_;_script infofile_;_ZIP::ssf304.xml_;_

'set Regulatory Mailing/Annual Contact to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid")_;_script infofile_;_ZIP::ssf305.xml_;_

'click Add Importer button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Importer").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Importer")_;_script infofile_;_ZIP::ssf306.xml_;_

'set Importer Company ID to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid_919").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid 919")_;_script infofile_;_ZIP::ssf307.xml_;_

'set Importer Company Name to Company Name
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer_company_name_919").Set "Company Name" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer company name 919")_;_script infofile_;_ZIP::ssf308.xml_;_

'set Street Address to 123 Fake Street
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET_919").Set "123 Fake Street" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET 919")_;_script infofile_;_ZIP::ssf309.xml_;_

'set City or Town to Denver
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY_919").Set "Denver" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY 919")_;_script infofile_;_ZIP::ssf310.xml_;_

'set Province to New Brunswick
Browser("Dev REP forms").Page("Product Information Template:").WebList("province_919").Select "New Brunswick" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("province 919")_;_script infofile_;_ZIP::ssf311.xml_;_

'set Postal Code to J7H 6G5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal_919").Set "J7H 6G5"

'click Save Record for Importer
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record").Click

'set Drug Use to Veterinary
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Select "Veterinary" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf314.xml_;_

'click Add Species button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Species").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Species")_;_script infofile_;_ZIP::ssf315.xml_;_

'set Species to Cattle
Browser("Dev REP forms").Page("Product Information Template:").WebList("VET_SPECIES_973").Select "Cattle" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("VET SPECIES 973")_;_script infofile_;_ZIP::ssf316.xml_;_

'set Subtypes to Beef heifers
Browser("Dev REP forms").Page("Product Information Template:").WebList("VET_SUBTYPES_973").Select "Beef heifers" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("VET SUBTYPES 973")_;_script infofile_;_ZIP::ssf317.xml_;_

'set Is this used for treatment of food-producing animals to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("IS_TREAT_FP_973").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("IS TREAT FP 973")_;_script infofile_;_ZIP::ssf318.xml_;_

'click Save Record for Species and subtypes recommended for use
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 2")_;_script infofile_;_ZIP::ssf319.xml_;_

'set on the Prescription Drug List to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList")_;_script infofile_;_ZIP::ssf320.xml_;_

'set Proposed Indication/Use/Dosage to Feed, then process
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Set "Feed, then process" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop Indication 3")_;_script infofile_;_ZIP::ssf321.xml_;_

'set Formulation Name to myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Set "myMix" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf322.xml_;_

'set Dosage Form to GRANULES FOR SOLUTION
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_115").Set "GRANULES FOR SOLUTION" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 909")_;_script infofile_;_ZIP::ssf323.xml_;_

'set Role to Medicinal Ingredient
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_422").Select "Medicinal Ingredient" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("typeahead-950-6180")_;_script infofile_;_ZIP::ssf325.xml_;_

'set Ingredient Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_422").Set "HYDROCHLORIC ACID" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing name 422")_;_script infofile_;_ZIP::ssf326.xml_;_

'set Chemical Abstract Services to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf327.xml_;_

'set Standard to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf328.xml_;_

'set Operator to Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_422").Select "Equals" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 422")_;_script infofile_;_ZIP::ssf329.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_422").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength VALUE 422")_;_script infofile_;_ZIP::ssf330.xml_;_

'set Units to NG
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_422").Set "NG" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 422")_;_script infofile_;_ZIP::ssf331.xml_;_

'set Per to Unit to Presentation
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_422").Select "Unit of Presentation" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 422")_;_script infofile_;_ZIP::ssf332.xml_;_

'set Unit of Presentation to IMP
Browser("Dev REP forms").Page("Product Information Template:").WebList("unit_presentation_422").Select "IMP" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("unit presentation 422")_;_script infofile_;_ZIP::ssf333.xml_;_

'set Calculated as Base to Yes, supplied as a base, and calculated as a base
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_422").Select "Yes, my ingredient is supplied as a base, and calculated as a base" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 422")_;_script infofile_;_ZIP::ssf334.xml_;_

'set Is this a nanomaterial to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_422").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is nano material 422")_;_script infofile_;_ZIP::ssf335.xml_;_

'set Animal or Human Sourced to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_422").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal human sourced 422")_;_script infofile_;_ZIP::ssf336.xml_;_

'set Was Animal and/or Human Sourced Material to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_115").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is animal human material 115")_;_script infofile_;_ZIP::ssf338.xml_;_

'set Container Type to Tupperware
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_435").Set "Tupperware" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container type 435")_;_script infofile_;_ZIP::ssf339.xml_;_

'set Package Size to 75 ounces
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_435").Set "75 ounces" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 435")_;_script infofile_;_ZIP::ssf340.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_435").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 435")_;_script infofile_;_ZIP::ssf341.xml_;_

'set Unit to Hours
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_435").Select "Hours" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 435")_;_script infofile_;_ZIP::ssf342.xml_;_

'set Minimum, Celsius to 0
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_435").Set "0" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min temp 435")_;_script infofile_;_ZIP::ssf343.xml_;_

'set Maximum, Celsius to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_435").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max temp 435")_;_script infofile_;_ZIP::ssf344.xml_;_

'set Other Shelf Life Considerations to Send to the slaughterhouse after feeding.
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration").Set "Send to the slaughter house after feeding." @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other shelf life consideration")_;_script infofile_;_ZIP::ssf345.xml_;_

'set Route of Administration to INTRATHORACIC
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_455").Set "INTRATHORACIC" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa lbl 455")_;_script infofile_;_ZIP::ssf347.xml_;_

'click Save Record for Routes of Administration
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_6").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 6")_;_script infofile_;_ZIP::ssf348.xml_;_

'set Country of Manufacture to Ethiopia
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_642").Set "Ethiopia" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 642")_;_script infofile_;_ZIP::ssf349.xml_;_

'click Human/Animal Sourced Ingredient/Material tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf350.xml_;_

'click Add Ingredient/Material button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material")_;_script infofile_;_ZIP::ssf351.xml_;_

'set Ingredient or Material Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1301").Set "HYDROCHLORIC ACID" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred mat name 1301")_;_script infofile_;_ZIP::ssf352.xml_;_

'set Source From Human to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human")_;_script infofile_;_ZIP::ssf353.xml_;_

'set System to Reproductive and urinary systems
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_1341").Select "Reproductive and urinary systems" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("system type 1341")_;_script infofile_;_ZIP::ssf354.xml_;_

'set Kidney to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney").Set "ON"

'click Save Record for Country of Manufacture @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 7")_;_script infofile_;_ZIP::ssf694.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click

'switch to Formulations tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("(required)").Click

'click Save Record for Ingredient Materials 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_3").Click

'click Save Record for Routes for Administration
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_4").Click

'click Save Record for Country of Manufacture
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf701.xml_;_

'click Save Record for Animal Sources
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_7").Click

'click Privacy Notice Statement checkbox
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf357.xml_;_

'click Save Working Copy button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy").Click
wait(5)

'save file as PI-veterinary-combined.hcsc
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_1990301544_;_script infofile_;_ZIP::ssf360.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "PI-veterinary-combined" @@ hightlight id_;_3276886_;_script infofile_;_ZIP::ssf361.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn

'go back to the previous page @@ hightlight id_;_3276886_;_script infofile_;_ZIP::ssf362.xml_;_
Browser("Dev REP forms").Back @@ hightlight id_;_983976_;_script infofile_;_ZIP::ssf363.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click @@ hightlight id_;_1049978_;_script infofile_;_ZIP::ssf364.xml_;_

End Function


Function veterinaryTest
	
'click PI v4.0.3	
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf365.xml_;_

'load file PI-veterinary-combined.hcsc
Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\PI-veterinary-combined.hcsc" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf367.xml_;_
wait(5)

'check Company ID is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Check CheckPoint("company_id_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf369.xml_;_

'check Dossier ID is 1234567
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Check CheckPoint("dossier_id_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf371.xml_;_

'check Dossier Type is Veterinary
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Check CheckPoint("dossier_type_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf373.xml_;_

'check Product Name is THE PRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Check CheckPoint("prod_name_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf375.xml_;_

'check Proper, Common or Non-Proprietary Name is WELCOME
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Check CheckPoint("proper_name_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf377.xml_;_

'check Manufacturer/Sponsor is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("manuid").Check CheckPoint("manuid_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf379.xml_;_

'check Contact for this Regulatory Activity is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("thisActivity").Check CheckPoint("thisActivity_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf381.xml_;_

'check Regulatory Mailing/Annual Contact is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("maillingid").Check CheckPoint("maillingid_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad")_;_script infofile_;_ZIP::ssf383.xml_;_

'check Canadian Importer is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("importeraddr").Check CheckPoint("importeraddr_3")

'click the drop-down for Importer
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement")_;_script infofile_;_ZIP::ssf386.xml_;_

'check Importer Company ID is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid_1496").Check CheckPoint("importerid_1496") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importerid 1496")_;_script infofile_;_ZIP::ssf387.xml_;_

'check Importer Company Name is Company Name
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("importer_company_name_1678").Check CheckPoint("importer_company_name_1496")

'check Street Address is 123 Fake Street
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("STREET_1496").Check CheckPoint("STREET_1496")

'check City or Town is Denver
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY_1496").Check CheckPoint("CITY_1496") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("CITY 1496")_;_script infofile_;_ZIP::ssf390.xml_;_

'check Province is New Brunswick
Browser("Dev REP forms").Page("Product Information Template:").WebList("province_1496").Check CheckPoint("province_1496") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("province 1496")_;_script infofile_;_ZIP::ssf391.xml_;_

'check Postal Code is J7H 6G5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal_1496").Check CheckPoint("postal_1496") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("postal 1496")_;_script infofile_;_ZIP::ssf392.xml_;_

'select, deselect, and then reselect Veterinary
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Select "Clinical Trial" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf690.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Select "Veterinary" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf691.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebList("VET_SUBTYPES_1805").Select "Veterinary"

'check Drug Use is Veterinary
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Check CheckPoint("drug_use_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf393.xml_;_


'DON'T DELETE,SPECIES AND SUBTYPES AREA DOES NOT LOAD

'check Species is Cattle @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("IS TREAT FP 1805")_;_script infofile_;_ZIP::ssf449.xml_;_
'Browser("Dev REP forms").Page("Product Information Template:").WebList("VET_SPECIES_1805").Check CheckPoint("VET_SPECIES_1805") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("VET SPECIES 1805")_;_script infofile_;_ZIP::ssf450.xml_;_

'check Subtypes is Beef heifers
'Browser("Dev REP forms").Page("Product Information Template:").WebList("VET_SUBTYPES_1805").Check CheckPoint("VET_SUBTYPES_1805")

'check Is used for treatment of food-producing animals is No
'Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("IS_TREAT_FP_1806").Check CheckPoint("IS_TREAT_FP_1805")

'check included in Schedule C is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC").Check CheckPoint("isScheduleC_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC")_;_script infofile_;_ZIP::ssf394.xml_;_

'check included in Schedule D is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD").Check CheckPoint("isScheduleD_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD")_;_script infofile_;_ZIP::ssf395.xml_;_

'check on the Prescription Drug List is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Check CheckPoint("isPrescriptionDrugList_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList")_;_script infofile_;_ZIP::ssf396.xml_;_

'check regulated under the Controlled Drugs and Substances ACt is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA").Check CheckPoint("isRegulatedCDSA_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA")_;_script infofile_;_ZIP::ssf397.xml_;_

'check a non-prescription drug is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isNonPrescriptionDrug").Check CheckPoint("isNonPrescriptionDrug_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isNonPrescriptionDrug")_;_script infofile_;_ZIP::ssf398.xml_;_

'check a non-prescription drug to which one or more Schedule A claims apply is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA").Check CheckPoint("isScheduleA_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA")_;_script infofile_;_ZIP::ssf399.xml_;_

'check Proposed Indication/Use/Dosage is Feed, then process
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Check CheckPoint("prop_Indication_5")

'click Formulation drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_17").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 17")_;_script infofile_;_ZIP::ssf703.xml_;_

'check Formulation Name is myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Check CheckPoint("formulationName_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf401.xml_;_

'check Dosage Form is GRANULES FOR SOLUTION
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_907").Check CheckPoint("dosage_form_910")

'click Add Ingredient button
'Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient").Click

'click Ingredient drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_20").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 20")_;_script infofile_;_ZIP::ssf728.xml_;_

'check Role is Medicinal Ingredient
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_1485").Check CheckPoint("ing_role_1485")

'check Ingredient Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_1485").Check CheckPoint("ing_name_1485")

'check Chemical Abstract Services is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Check CheckPoint("casNum_3")

'check Standard is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Check CheckPoint("standardVal_3")

'check Operator is Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_1485").Check CheckPoint("strength_operator_1491")

'check Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_1485").Check CheckPoint("units_1485")

'check Units is NG
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_1485").Check CheckPoint("per_strength_1485")

'check Unit of Presentation is IMP
Browser("Dev REP forms").Page("Product Information Template:").WebList("unit_presentation_1486").Check CheckPoint("unit_presentation_1486") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("unit presentation 1486")_;_script infofile_;_ZIP::ssf729.xml_;_

'check Calculated as Base is Yes, supplied as Base, and Calculated as Base
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_1486").Check CheckPoint("calculated_as_base_1486")

'check Is nanomaterial is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_1485").Check CheckPoint("is_nano_material_1485")

'check Animal or Human Sourced is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_1485").Check CheckPoint("animal_human_sourced_1485")

'check Was Animal and/or Human Sourced Material to NO
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_906").Check CheckPoint("is_animal_human_material_910")
 @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 18")_;_script infofile_;_ZIP::ssf704.xml_;_
'click Container Type 1 drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_18").Click

'check Container Type is Tupperware
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_1486").Check CheckPoint("container_type_1694")

'check Package Size is 75 ounces
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_1487").Check CheckPoint("package_size_1694")

'check Shelf Life Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_1694").Check CheckPoint("shelf_life_number_1694")

'check Shelf Life Unit is Hours
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_1487").Check CheckPoint("shelf_life_unit_1694")

'check Minimum, Celsius is 0
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_1486").Check CheckPoint("min_temp_1694")

'check Maximum, Celsius is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_1486").Check CheckPoint("max_temp_1694")

'check Other Shelf Life Considerations is send to the Slaughter house after feeding
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_considerations_1486").Check CheckPoint("other_shelf_life_considerations_1694")

'click Routes of Administration drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_19").Click

'check Routes of Administration is INTRATHORACIC
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_1113").Check CheckPoint("roa_lbl_1086")

'click Country of Manufacture drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_9").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 9")_;_script infofile_;_ZIP::ssf426.xml_;_

'check Country of Manufacture is Ethiopia
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1194").Check CheckPoint("country_name_1194") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1194")_;_script infofile_;_ZIP::ssf427.xml_;_

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf428.xml_;_

'click on Ingredient/Material Name drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_10").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 10")_;_script infofile_;_ZIP::ssf429.xml_;_

'check Ingredient or Material Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1657").Check CheckPoint("ingred_mat_name_1479")

'check Source From Human is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human").Check CheckPoint("sourced-human_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human")_;_script infofile_;_ZIP::ssf431.xml_;_

'check Source From Animal is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal").Check CheckPoint("sourced-animal_2") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal")_;_script infofile_;_ZIP::ssf432.xml_;_

'click Tissues or Fluids sources drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_11").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 11")_;_script infofile_;_ZIP::ssf433.xml_;_

'check System is Reproductive and urinary systems
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_1543").Check CheckPoint("system_type_1543") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("system type 1543")_;_script infofile_;_ZIP::ssf434.xml_;_

'check the follow checkboxes:
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("milkProducts").Check CheckPoint("milkProducts_2") 'milk or milk products is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("ovaries").Check CheckPoint("ovaries_2") 'Kidney is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("testes").Check CheckPoint("testes_2") 'Colostrum is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("kidney").Check CheckPoint("kidney_2") 'Mammary glands is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("placenta").Check CheckPoint("placenta_2") 'Ovaries is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("urine").Check CheckPoint("urine_2") 'Placenta is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("colostrum").Check CheckPoint("colostrum_2") 'Placental fluid is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("placentalFluid").Check CheckPoint("placentalFluid_2") 'Semen is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("reprodOther").Check CheckPoint("reprodOther_2") 'Testes is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mammaryGlands").Check CheckPoint("mammaryGlands_2") 'Urine is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("semen").Check CheckPoint("semen_2") 'Other reproductive and urinary system us OFF @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("semen")_;_script infofile_;_ZIP::ssf445.xml_;_

'check Privacy Notice Statement is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf446.xml_;_
	
End Function


Function clinicalTrialScenario
	
'click the link PI v4.0.3
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf453.xml_;_

'set Company ID to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Set "12345" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company id 3")_;_script infofile_;_ZIP::ssf454.xml_;_

'set Dossier ID to 1234567
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Set "1234567" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier id 3")_;_script infofile_;_ZIP::ssf455.xml_;_

'set Dossier Type to Clinical Trial
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Select "Clinical Trial" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf456.xml_;_

'set Product Name to DEE PRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Set "DEE PRODUCT" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod name 3")_;_script infofile_;_ZIP::ssf457.xml_;_

'set Proper, Common or Non-Proprietary Name to NON-PROPRIETARY
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Set "NON-PROPRIETARY " @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper name 3")_;_script infofile_;_ZIP::ssf458.xml_;_

'set Protocol number to 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("protocol_number_906").Set "12345"

'set Protocol Title to the protocol @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("protocol title 906")_;_script infofile_;_ZIP::ssf460.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("protocol_title_906").Set "the protocol"

'set Female paediatric population to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("fmppId").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("fmppId")_;_script infofile_;_ZIP::ssf461.xml_;_

'set Male adult population to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mapId").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mapId")_;_script infofile_;_ZIP::ssf462.xml_;_

'set Phase 1 - other to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1OtherId").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1OtherId")_;_script infofile_;_ZIP::ssf463.xml_;_

'set Phase 1 - study in healthy human to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1StudyId").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1StudyId")_;_script infofile_;_ZIP::ssf464.xml_;_

'set Other to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phaseOtherId").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phaseOtherId")_;_script infofile_;_ZIP::ssf465.xml_;_

'set Other(please specify) to The elderly
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("cta_other_906").Set "The elderly" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("cta other 906")_;_script infofile_;_ZIP::ssf466.xml_;_

'set Information regarding Research EthicsBoard to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("info_reb_906").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("info reb 906")_;_script infofile_;_ZIP::ssf467.xml_;_

'set Are clinical trial drugs imported into Canada to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("areDrugsImportedId").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("areDrugsImportedId")_;_script infofile_;_ZIP::ssf468.xml_;_

'set Drug Use to Human
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Select "Human" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf469.xml_;_

'set on the Prescription Drug List to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList")_;_script infofile_;_ZIP::ssf470.xml_;_

'click the Formulation Name drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("8. Drug Use (required)").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("8. Drug Use (required)")_;_script infofile_;_ZIP::ssf471.xml_;_

'set Proposed Indication/Use/Dosage to indication
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Set "indication" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop Indication 3")_;_script infofile_;_ZIP::ssf472.xml_;_

'set the Formulation Name to myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Set "myMix" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf473.xml_;_

'set the Dosage Form to FLOSS
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_115").Set "FLOSS" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 909")_;_script infofile_;_ZIP::ssf474.xml_;_

'set the Role to Medicinal Ingredient
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_422").Select "Medicinal Ingredient" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("ing role 422")_;_script infofile_;_ZIP::ssf475.xml_;_

'set Ingredient Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_422").Set "HYDROCHLORIC ACID" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing name 422")_;_script infofile_;_ZIP::ssf476.xml_;_

'set Chemical Abstract Services to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf477.xml_;_

'set Standard to 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf478.xml_;_

'set Operator to Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_422").Select "Equals" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 422")_;_script infofile_;_ZIP::ssf479.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_422").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength VALUE 422")_;_script infofile_;_ZIP::ssf480.xml_;_

'set Units to UNIT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_422").Set "UNIT" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 422")_;_script infofile_;_ZIP::ssf481.xml_;_

'set Per to Unit of Measure
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_422").Select "Unit of Measure" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 422")_;_script infofile_;_ZIP::ssf482.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("per_value_422").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("per value 422")_;_script infofile_;_ZIP::ssf483.xml_;_

'set Unit of Measure to ML
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("unit_measure_422").Set "ML" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("unit measure 422")_;_script infofile_;_ZIP::ssf484.xml_;_

'set Calculated as Base to Yes, my ingredient is supplied as a base, and calculated as a base
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_422").Select "Yes, my ingredient is supplied as a base, and calculated as a base" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 422")_;_script infofile_;_ZIP::ssf485.xml_;_

'set Is this a nanomaterial to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_422").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is nano material 422")_;_script infofile_;_ZIP::ssf486.xml_;_

'set Animal or Human Sourced to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_422").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Please provide additional")_;_script infofile_;_ZIP::ssf488.xml_;_

'click Save Record for Ingredient Details 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record")_;_script infofile_;_ZIP::ssf489.xml_;_

'set Which Market is the investigational drug product from to Foreign
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("drugMarketId__115").Select "FOREIGN" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("drugMarketId  115")_;_script infofile_;_ZIP::ssf490.xml_;_

'set Country Name to Cameroon
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1227").Set "Cameroon"

'click Save Record for Country of Manufacture
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 2")_;_script infofile_;_ZIP::ssf492.xml_;_

'set Was Animal and/or Human Sourced Material to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_115").Select "N" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is animal human material 115")_;_script infofile_;_ZIP::ssf493.xml_;_

'set Container Type to Ziploc
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_435").Set "Ziploc" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container type 435")_;_script infofile_;_ZIP::ssf494.xml_;_

'set Package Size to 50 grams
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_435").Set "50 grams" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 435")_;_script infofile_;_ZIP::ssf495.xml_;_

'set Value to 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_435").Set "5" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 435")_;_script infofile_;_ZIP::ssf496.xml_;_

'set Unit to Minutes
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_435").Select "Minutes" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 435")_;_script infofile_;_ZIP::ssf497.xml_;_

'set Minimum, Celsius to 6
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_435").Set "6" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min temp 435")_;_script infofile_;_ZIP::ssf498.xml_;_

'set Maximum, Celsius to 8
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_435").Set "8" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max temp 435")_;_script infofile_;_ZIP::ssf499.xml_;_

'set Other Shelf Life Considerations to Do not feed to animals.
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration").Set "Do not feed to animals." @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other shelf life consideration")_;_script infofile_;_ZIP::ssf500.xml_;_

'click Save Record for Ingredient Materials 1
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_3").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 3")_;_script infofile_;_ZIP::ssf501.xml_;_

'set Route of Administration to DISINFECTANT (Medical Instrument)
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_455").Set "DISINFECTANT (Medical Instruments)" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa lbl 455")_;_script infofile_;_ZIP::ssf502.xml_;_

'click Save Record for Routes for Administration
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_4").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 4")_;_script infofile_;_ZIP::ssf503.xml_;_

'set Country of Manufacture to Afghanistan
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_642").Set "Afghanistan" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 642")_;_script infofile_;_ZIP::ssf504.xml_;_

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf505.xml_;_

'click Add Ingredient/Material tab
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Add Ingredient/Material")_;_script infofile_;_ZIP::ssf506.xml_;_

'set Ingredient or Material Name to HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1607").Set "HYDROCHLORIC ACID" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred mat name 1607")_;_script infofile_;_ZIP::ssf507.xml_;_

'set Source From Animal to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal")_;_script infofile_;_ZIP::ssf508.xml_;_

'set System to Cardio-Respiratory system
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_1614").Select "Cardio-Respiratory system"

'set Trachea to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("trachea").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("trachea")_;_script infofile_;_ZIP::ssf510.xml_;_

'set Lung to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("lung").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("lung")_;_script infofile_;_ZIP::ssf511.xml_;_

'click Save Record for Tissues or Fluids sources
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_5").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 5")_;_script infofile_;_ZIP::ssf512.xml_;_

'set Animal Type to Feline such as cat
Browser("Dev REP forms").Page("Product Information Template:").WebList("animal_type_1639").Select "Feline such as cat"

'set Provide the animal type description to Fuzzy boi
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("animal_details_1656").Set "Fuzzy boi"

'click Save Record for Animal Sources
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record_7").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Record 7")_;_script infofile_;_ZIP::ssf515.xml_;_

'check Controlled Population is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("controlledPop_1575").Select "Y" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("controlledPop 1576")_;_script infofile_;_ZIP::ssf718.xml_;_

'set Is age known to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_age_known_1575").Select "N"

'set Controlled Population to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("cellLine_1575").Select "N"

'set Cell line to No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("controlledPop_1575").Select "N"

'set Biotechnology Derived Animal to Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("biotechderived_1575").Select "Y"

'set Country Name to Guyana
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1649").Set "Guyana" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1722")_;_script infofile_;_ZIP::ssf520.xml_;_

'set the Privacy Notice Statement to ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Set "ON" @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf521.xml_;_

'click the Save Working Copy button
Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebButton("Save Working Copy")_;_script infofile_;_ZIP::ssf522.xml_;_

'save the file as PI-clinicalTrial-combined.hcsc
wait(4)
Browser("Dev REP forms").WinObject("Notification").WinButton("6").Click @@ hightlight id_;_2029693296_;_script infofile_;_ZIP::ssf523.xml_;_
Browser("Dev REP forms").WinMenu("ContextMenu").Select "Save as"
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Set "PI-clinicalTrial-combined" @@ hightlight id_;_329492_;_script infofile_;_ZIP::ssf524.xml_;_
Browser("Dev REP forms").Dialog("Save As").WinEdit("File name:").Type  micReturn @@ hightlight id_;_329492_;_script infofile_;_ZIP::ssf525.xml_;_

'go back to the previous page
Browser("Dev REP forms").Back @@ hightlight id_;_918800_;_script infofile_;_ZIP::ssf526.xml_;_
Browser("Dev REP forms").Dialog("Windows Internet Explorer").WinButton("Leave this page").Click
	
End Function


Function clinicalTrialTest

'click the link PI v4.0.3
Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template").Click

'load file PI-clinicalTrial.hcsc
Browser("Dev REP forms").Page("Product Information Template:").WebFile("fileLoad").Set "C:\Users\hcuser\Downloads\PI-clinicalTrial-combined.hcsc"
wait(5)	
	
'check Company ID is 12345 @@ hightlight id_;_67482_;_script infofile_;_ZIP::ssf597.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company_id_3").Check CheckPoint("company_id_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("company id 3")_;_script infofile_;_ZIP::ssf601.xml_;_

'check Dossier ID is 1234567
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier_id_3").Check CheckPoint("dossier_id_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dossier id 3")_;_script infofile_;_ZIP::ssf602.xml_;_

'check Dossier Type is Clinical Trial
Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier_type_3").Check CheckPoint("dossier_type_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("dossier type 3")_;_script infofile_;_ZIP::ssf603.xml_;_

'check Product Name is DEE PRODUCT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod_name_3").Check CheckPoint("prod_name_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prod name 3")_;_script infofile_;_ZIP::ssf604.xml_;_

'check Proper, Common or Non-Proprietary Name is NON-PROPRIETARY 
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper_name_3").Check CheckPoint("proper_name_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("proper name 3")_;_script infofile_;_ZIP::ssf605.xml_;_

'check Protocol number is 12345
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("protocol_number_1935").Check CheckPoint("protocol_number_906")

'check Protocol Title is the protocol title
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("protocol_title_1935").Check CheckPoint("protocol_title_906") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("protocol title 906")_;_script infofile_;_ZIP::ssf607.xml_;_

'check the Anticipatead Clinical Trial Composition:
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("fmppId").Check CheckPoint("fmppId") 'female paediatric population is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("fmapId").Check CheckPoint("fmapId") 'female adult population is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mppId").Check CheckPoint("mppId") 'male paediatric population is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mapId").Check CheckPoint("mapId") 'make adult population is ON @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("mapId")_;_script infofile_;_ZIP::ssf611.xml_;_

'check Clinical Trial:
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1BioId").Check CheckPoint("phase1BioId") 'phase 1 - bioequivalence study is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1OtherId").Check CheckPoint("phase1OtherId") 'phase 1 - other is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase3Id").Check CheckPoint("phase3Id") 'phase 3 is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase1StudyId").Check CheckPoint("phase1StudyId") 'phase 1 - study in healthy humans is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phase2Id").Check CheckPoint("phase2Id") 'phase 2 is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phaseOtherId").Check CheckPoint("phaseOtherId") 'other is ON @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("phaseOtherId")_;_script infofile_;_ZIP::ssf617.xml_;_

'check Other(please specify) is The elderly @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("cta other 906")_;_script infofile_;_ZIP::ssf618.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("cta_other_1935").Check CheckPoint("cta_other_1935") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("cta other 1935")_;_script infofile_;_ZIP::ssf725.xml_;_

'check Information regarding Research Ethics Board is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("info_reb_907").Check CheckPoint("info_reb_1935") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("info reb 907")_;_script infofile_;_ZIP::ssf726.xml_;_

'check Are clinical trial drugs imported into Canada is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("areDrugsImportedId_2").Check CheckPoint("areDrugsImportedId") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("areDrugsImportedId 2")_;_script infofile_;_ZIP::ssf620.xml_;_

'check Drug Use is Human
Browser("Dev REP forms").Page("Product Information Template:").WebList("drug_use_3").Check CheckPoint("drug_use_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("drug use 3")_;_script infofile_;_ZIP::ssf621.xml_;_

'check Schedule and Prescriptions:
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleC").Check CheckPoint("isScheduleC_4") 'included in schedule C is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleD").Check CheckPoint("isScheduleD_4") 'included in schedule D is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isPrescriptionDrugList").Check CheckPoint("isPrescriptionDrugList_4") 'on the Prescription Drug List is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isRegulatedCDSA").Check CheckPoint("isRegulatedCDSA_4") 'regulated under Controlled Drugs and Substances Act is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isNonPrescriptionDrug").Check CheckPoint("isNonPrescriptionDrug_4") 'a non-prescription drug is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA").Check CheckPoint("isScheduleA_4") 'a non-prescription which one or more Schedule claims apply is OFF @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("isScheduleA")_;_script infofile_;_ZIP::ssf627.xml_;_

'check Proposed Indication/Use/Dosage is indication
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop_Indication_3").Check CheckPoint("prop_Indication_6") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("prop Indication 3")_;_script infofile_;_ZIP::ssf628.xml_;_
 @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf598.xml_;_
'click drop-down for Formulations
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_12").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 12")_;_script infofile_;_ZIP::ssf629.xml_;_

'check Formulation Name is myMix
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName").Check CheckPoint("formulationName_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("formulationName")_;_script infofile_;_ZIP::ssf630.xml_;_

'check Dosage Form is FLOSS
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage_form_914").Check CheckPoint("dosage_form_914") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("dosage form 914")_;_script infofile_;_ZIP::ssf631.xml_;_

'click drop-down for Ingredients
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_2").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf632.xml_;_

'check Role is Medicinal Ingredient
Browser("Dev REP forms").Page("Product Information Template:").WebList("ing_role_1500").Check CheckPoint("ing_role_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("ing role 1500")_;_script infofile_;_ZIP::ssf633.xml_;_

'check Ingredient Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing_name_1500").Check CheckPoint("ing_name_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ing name 1500")_;_script infofile_;_ZIP::ssf634.xml_;_

'check Chemical Abstract Services is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum").Check CheckPoint("casNum_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("casNum")_;_script infofile_;_ZIP::ssf635.xml_;_

'check Standard is 5
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal").Check CheckPoint("standardVal_4") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("standardVal")_;_script infofile_;_ZIP::ssf636.xml_;_

'check Operator is Equals
Browser("Dev REP forms").Page("Product Information Template:").WebList("strength_operator_1500").Check CheckPoint("strength_operator_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("strength operator 1500")_;_script infofile_;_ZIP::ssf637.xml_;_

'check Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength_VALUE_1500").Check CheckPoint("strength_VALUE_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("strength VALUE 1500")_;_script infofile_;_ZIP::ssf638.xml_;_

'check Units is UNIT
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units_1500").Check CheckPoint("units_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("units 1500")_;_script infofile_;_ZIP::ssf639.xml_;_

'check Per is Unit of Measure
Browser("Dev REP forms").Page("Product Information Template:").WebList("per_strength_1500").Check CheckPoint("per_strength_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("per strength 1500")_;_script infofile_;_ZIP::ssf640.xml_;_

'check Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("per_value_1500").Check CheckPoint("per_value_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("per value 1500")_;_script infofile_;_ZIP::ssf641.xml_;_

'check Unit of Measure is ML
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("unit_measure_1500").Check CheckPoint("unit_measure_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("unit measure 1500")_;_script infofile_;_ZIP::ssf642.xml_;_

'check Calculated as Base is Yes, my ingredient is supplied as a base, and calculated as a base
Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated_as_base_1500").Check CheckPoint("calculated_as_base_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("calculated as base 1500")_;_script infofile_;_ZIP::ssf643.xml_;_

'check Is this a nanomaterial is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_nano_material_1500").Check CheckPoint("is_nano_material_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is nano material 1500")_;_script infofile_;_ZIP::ssf644.xml_;_

'check Animal or Human Sourced is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal_human_sourced_1500").Check CheckPoint("animal_human_sourced_1500") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("animal human sourced 1500")_;_script infofile_;_ZIP::ssf645.xml_;_

'check Which market is the investigational drug product from is Foreign
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("drugMarketId__914").Check CheckPoint("drugMarketId__914") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("drugMarketId  914")_;_script infofile_;_ZIP::ssf646.xml_;_

'click the drop-down for country
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_4").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 4")_;_script infofile_;_ZIP::ssf647.xml_;_

'check Country Name is Cameroon
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1682").Check CheckPoint("country_name_1682") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1682")_;_script infofile_;_ZIP::ssf648.xml_;_

'check Was Animal and/or Human Sourced Material is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_animal_human_material_914").Check CheckPoint("is_animal_human_material_914") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is animal human material 914")_;_script infofile_;_ZIP::ssf649.xml_;_

'click the drop-down for Container Type
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_9").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 9")_;_script infofile_;_ZIP::ssf650.xml_;_

'check Container Type is Ziploc
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container_type_1501").Check CheckPoint("container_type_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("container type 1501")_;_script infofile_;_ZIP::ssf651.xml_;_

'check Package Size is 50 grams
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package_size_1501").Check CheckPoint("package_size_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("package size 1501")_;_script infofile_;_ZIP::ssf652.xml_;_

'check Value is 5
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf_life_number_1501").Check CheckPoint("shelf_life_number_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("shelf life number 1501")_;_script infofile_;_ZIP::ssf653.xml_;_

'check Unit is Minutes
Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf_life_unit_1501").Check CheckPoint("shelf_life_unit_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("shelf life unit 1501")_;_script infofile_;_ZIP::ssf654.xml_;_

'check Minimum, Celsius is 6
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min_temp_1501").Check CheckPoint("min_temp_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("min temp 1501")_;_script infofile_;_ZIP::ssf655.xml_;_

'check Maximum, Celsius is 8
Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max_temp_1501").Check CheckPoint("max_temp_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebNumber("max temp 1501")_;_script infofile_;_ZIP::ssf656.xml_;_

'check Other Shelf Life Considerations is Do not feed to animals.
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other_shelf_life_consideration_5").Check CheckPoint("other_shelf_life_considerations_1501") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("other shelf life consideration 5")_;_script infofile_;_ZIP::ssf657.xml_;_

'click drop-down for Route of Administration
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_6").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 6")_;_script infofile_;_ZIP::ssf658.xml_;_

'check Route of Administration is DISINFECTANT(Medical Instrument)
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa_lbl_1123").Check CheckPoint("roa_lbl_1123") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("roa lbl 1123")_;_script infofile_;_ZIP::ssf659.xml_;_

'click the drop-down for Country of Manufacture
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_13").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 13")_;_script infofile_;_ZIP::ssf660.xml_;_

'check Country of Manufacture is Afghanistan
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_1231").Check CheckPoint("country_name_1231") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1231")_;_script infofile_;_ZIP::ssf661.xml_;_

'click Human/Animal Sourced Ingredient tab
Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf662.xml_;_

'click the drop-down for Ingredient/Material Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_8").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 8")_;_script infofile_;_ZIP::ssf721.xml_;_

'check Ingredient or Material Name is HYDROCHLORIC ACID
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred_mat_name_1961").Check CheckPoint("ingred_mat_name_1961") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("ingred mat name 1961")_;_script infofile_;_ZIP::ssf665.xml_;_

'check Source From Human is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human").Check CheckPoint("sourced-human_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-human")_;_script infofile_;_ZIP::ssf666.xml_;_

'check Source From Animal is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal").Check CheckPoint("sourced-animal_3") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("sourced-animal")_;_script infofile_;_ZIP::ssf667.xml_;_

'click the System drop-down
'Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_14").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 14")_;_script infofile_;_ZIP::ssf668.xml_;_

'check System is Cardio-Respiratory system
Browser("Dev REP forms").Page("Product Information Template:").WebList("system_type_2025").Check CheckPoint("system_type_2025") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebList("system type 2025")_;_script infofile_;_ZIP::ssf669.xml_;_

'check Cardio-Respiratory system checkboxes:
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("heartPericardium").Check CheckPoint("heartPericardium") 'heart or pericardium is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("lung").Check CheckPoint("lung") 'lung is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("nasalFluid").Check CheckPoint("nasalFluid") 'nasal fluid is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("trachea").Check CheckPoint("trachea") 'trachea is ON
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("otherCardio").Check CheckPoint("otherCardio") 'other cardio-respriatory system is OFF @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("otherCardio")_;_script infofile_;_ZIP::ssf674.xml_;_

'click Animal Sources drop-down
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_15").Click

'check Animal Type is Feline such as cat
Browser("Dev REP forms").Page("Product Information Template:").WebList("animal_type_2075").Check CheckPoint("animal_type_2075")

'check Provide the animal type description is Fuzzy boi
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("animal_details_2076").Check CheckPoint("animal_details_2075")

'check Is age of animals known is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is_age_known_2006").Check CheckPoint("is_age_known_2006") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("is age known 2006")_;_script infofile_;_ZIP::ssf678.xml_;_

'check Controlled Population is No @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("controlledPop 2006")_;_script infofile_;_ZIP::ssf679.xml_;_
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("controlledPop_2006").Check CheckPoint("controlledPop_2006") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("controlledPop 2006")_;_script infofile_;_ZIP::ssf722.xml_;_

'check Cell line is No
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("cellLine_2006").Check CheckPoint("cellLine_2006") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("cellLine 2006")_;_script infofile_;_ZIP::ssf723.xml_;_
 @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("biotechderived 2006")_;_script infofile_;_ZIP::ssf724.xml_;_

'check Biotechnology Derived Animal is Yes
Browser("Dev REP forms").Page("Product Information Template:").WebRadioGroup("biotechderived_2006").Check CheckPoint("biotechderived_2006")

'click drop-down for Animal Countries of Origin
Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement_16").Click @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("WebElement 16")_;_script infofile_;_ZIP::ssf682.xml_;_

'check Country Name is Guyana
Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country_name_2084").Check CheckPoint("country_name_2084") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 2084")_;_script infofile_;_ZIP::ssf683.xml_;_

'check Privacy Notice Statement is OFF
Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy_statement_3").Check CheckPoint("privacy_statement_5") @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebCheckBox("privacy statement 3")_;_script infofile_;_ZIP::ssf684.xml_;_
	
End Function




biologicScenario()
biologicTest()

'pharmaceuticalScenario()
'pharmaceuticalTest() @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebEdit("country name 1209")_;_script infofile_;_ZIP::ssf293.xml_;_

'veterinaryScenario()
'veterinaryTest() @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf278.xml_;_
 @@ hightlight id_;_Browser("Dev REP forms").Page("Dev REP forms").Link("Product Information Template")_;_script infofile_;_ZIP::ssf286.xml_;_
'clinicalTrialScenario() @@ hightlight id_;_Browser("Dev REP forms").Page("Product Information Template:").WebElement("Human/Animal Sourced Ingredien")_;_script infofile_;_ZIP::ssf287.xml_;_
'clinicalTrialTest()
