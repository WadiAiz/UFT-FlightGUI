'Remplir les infos @@ hightlight id_;_2074989296_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("Debat", dtLocalSheet) @@ hightlight id_;_1888872120_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("Arriver", dtLocalSheet) @@ hightlight id_;_3540108_;_script infofile_;_ZIP::ssf58.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("NofTick", dtLocalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1894080584_;_script infofile_;_ZIP::ssf44.xml_;_

'Choisir un vol
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_1894097768_;_script infofile_;_ZIP::ssf45.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1894109528_;_script infofile_;_ZIP::ssf46.xml_;_

'Le nom de personne
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("PersonneName", dtLocalSheet) @@ hightlight id_;_1894098152_;_script infofile_;_ZIP::ssf47.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click

'Récuperer le numéro @@ hightlight id_;_2142036616_;_script infofile_;_ZIP::ssf72.xml_;_
wait(5)

WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 89 completed").Output CheckPoint("Order 136 completed") @@ hightlight id_;_2100785896_;_script infofile_;_ZIP::ssf75.xml_;_
'WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order 89 completed").Output CheckPoint("Order 117 completed")
 @@ hightlight id_;_2819652_;_script infofile_;_ZIP::ssf74.xml_;_

'Nouvelle commande
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1899432424_;_script infofile_;_ZIP::ssf50.xml_;_

