let maleNames = ["Adam", "Aaron", "Alexander", "Andrew", "Arthur", "Abraham", "Adrian", "Aiden", "Abdul", "Alfred", "Alfie", "Ash", "Anthony", "Axel", "Archer", "Allan", "Allen", "Alistair", "Arnold", "Amelio", "Benjamin", "Baxter", "Bernard", "Billy", "Blair", "Bruce", "Bert", "Blake", "Barry", "Ben", "Bob", "Brent", "Brock", "Bryan", "Christopher", "Chris", "Charles", "Charlie", "Cory", "Connor", "Callan", "Caleb", "Cameron", "Calvin", "Callum", "Calum", "Casper", "Craig", "Carter", "Cedric", "Chad", "Clive", "Cliff", "David", "Darren", "Daniel", "Danny", "Dominic", "Dale", "Damian", "Dan", "Danny", "Darnell", "Dave", "Darryl", "Daryl", "Dean", "Declan", "Denis", "Drew", "Douglas", "Ethan", "Ed", "Edd", "Edgar", "Eddy", "Erwin", "Edmond", "Edward", "Elliot", "Ellis", "Emanuel", "Ezekiel", "Eric", "Ernist", "Euan", "Eugene", "Evan", "Ewan", "Ezra", "Elijah", "Erwin", "Flynt", "Fanian", "Findlay", "Felix", "Fernando", "Fred", "Finn", "Fletcher", "Floyd", "Francis", "Frank", "Franklin", "Fraser", "Fredrick", "Fry", "Gabrial", "Gabriel", "Gareth", "Garry", "Gary", "Gavin", "Geoffrey", "Gerald", "George", "Gerry", "Gilbert", "Gino", "Glen", "Gordon", "Graham", "Grant", "Greg", "Graeme", "Gregor", "Gus", "Gregory", "Harry", "Henry", "Hadyn", "Hamish", "Hamza", "Haris", "Harold", "Harvey", "Hugh", "Iain", "Ian", "Idris", "Igor", "Imran", "Irfan", "Isaac", "Isaiah", "Jack", "Jacob", "Jackson", "Jayden", "Jamie", "Jake", "Jamal", "James", "Jeremy", "John", "Johnathan", "Jarvis", "Jason", "Jasper", "Jax", "Jordan", "Josh", "Joshua", "Joseph", "Kyle", "Kevin", "Kai", "Kian", "Kane", "Kaiden", "Kalvin", "Karl", "Liam", "Logan", "Lachlan", "Lance", "Larry", "Lars", "Laurance", "Lee", "Leon", "Leo", "Leonard", "Lenny", "Lewis", "Lincoln", "Logan", "Levi", "Louis", "Luca", "Lucas", "Luke", "Michael", "Mike", "Max", "Matthew", "Mac", "Mackenzie", "Malcolm", "Mark", "Marc", "Malik", "Manuel", "Mario", "Marcus", "Markus", "Marty", "Morty", "Marshall", "Martin", "Martyn", "Mason", "Matt", "Max", "Maurice", "Noah", "Nathan", "Nate", "Nathanael", "Neil", "Nial", "Nick", "Nicky", "Nicholas", "Nigel", "Nico", "Nolan", "Oliver", "Odin", "Oli", "Olaf", "Omar", "Oscar", "Otis", "Otto", "Owan", "Ozzy", "Owen", "Peter", "Patrick", "Pablo", "Paddy", "Parker", "Paul", "Percy", "Pete", "Perry", "Pedro", "Paulo", "Pharrell", "Phillip", "Philip", "Pierce", "Prince", "Quinn", "Riley", "Ralf", "Ralph", "Regan", "Reese", "Reid", "Reiley", "Reilly", "Reis", "Reiss", "Rex", "Reuban", "Rhys", "Richard", "Ricardo", "Robert", "Robbie", "Rob", "Roberto", "Ragnar", "Rodger", "Roland", "Roman", "Romeo", "Ronald", "Ron", "Ronan", "Ronnie", "Ross", "Roy", "Ruari", "Rupert", "Russell", "Ryan", "Ryhs", "Rory", "Samuel", "Sam", "Simon", "Stephen", "Steven", "Samson", "Scott", "Sean", "Shaun", "Sebastian", "Shane", "Shay", "Spencer", "Stan", "Stanley", "Stevie", "Stewart", "Stirling", "Stuart", "Tom", "Thomas", "Ted", "Teddie", "Terrance", "Terry", "Theo", "Theodore", "Thor", "Tim", "Timmy", "Toby", "Todd", "Tony", "Travis", "Trevor", "Triston", "Troy", "Tucker", "Taylor", "Tyler", "Tyrell", "Tyresse", "Tyrone", "Tyson", "Umar", "Usman", "Victor", "Vaughn", "Viktor", "Vince", "Vincent", "Vinnie", "William", "Wade", "Walter", "Warren", "Wayne", "Wilfred", "Winston", "Xavier", "Yanis", "Zak", "Zac", "Zach", "Zaine"];

let femaleNames = ["Amelia", "Anne", "Adele", "Antonia", "Ashleigh", "Abby", "Abbigail", "Alice", "Alicia", "Amber", "Adelle", "Aileen", "Aiesha", "Amy", "Aimee", "Alanna", "Alexandra", "Alexa", "Alisa", "Alison", "Amanda", "Anna", "Arial", "Astrid", "Bethany", "Beth", "Bryony", "Bailey", "Becky", "Bella", "Becca", "Belle", "Barbara", "Brenda", "Britany", "Brooke", "Caitlin", "Clara", "Carla", "Carly", "Charlie", "Caroline", "Catherine", "Catrina", "Cheryl", "Chanelle", "Candice", "Chantelle", "Charlotte", "Chloe", "Christina", "Ciara", "Claudia", "Claire", "Carmel", "Carol", "Caroline", "Carolyn", "Crystal",  "Chantelle", "Dianna", "Danni", "Donna", "Danielle", "Dawn", "Daisey", "Deborah", "Denise", "Dionne", "Dianne", "Dominique", "Elaine", "Elle", "Ellie", "Elspeth", "Eva", "Emma", "Edith", "Eileen", "Eleonor", "Erin", "Elizabeth", "Ellen", "Ellie", "Emily", "Faith", "Felecia", "Fiona", "Florence", "Francesca", "Grace", "Gabrielle", "Gabriella", "Gemma", "Grace", "Gwen", "Gail", "Georgia", "Gillian", "Hailey", "Holly", "Hollie", "Hannah", "Harriet", "Heather", "Helen", "Hazel", "Heidi", "Hope", "Imogen", "Irene", "Isla", "Ingreid", "Isobel", "Jocelyn", "Jackie", "Jade", "Jodie", "Jasmin", "Janet", "Joyce", "Joy", "Jemma", "Jane", "Janice", "Jeanette", "Jean", "Jenny", "Julie", "Joan", "Jennifer", "Jessica", "Joanne", "Jody", "Jordyn", "Judith", "Julia", "Juliana", "Jaqueline", "Kelly", "Kim", "Kerry", "Kylie", "Kaitlin", "Kaleigh", "Kamila", "Kiera", "Kayleigh", "Kelsey", "Kimberley", "Karen", "Karina", "Kate", "Katie", "Kendra", "Kirsty", "Kirsten", "Lucy", "Laura", "Lauren", "Lauryn", "Leanne", "Laurie", "Leah", "Lisa", "Leah", "Leana", "Leigh", "Leona", "Lori", "Lesley", "Lexi", "Linda", "Lyndsey", "Louis", "Layla", "Lorna", "Lydia", "Lynsey", "Lidia", "Lilly", "Lindsey", "Lorraine", "Louise", "Lynn", "Maria", "Margaret", "Mary", "Maddison", "Maggie", "Mandy", "Molly", "Morag", "Myra", "Marie", "Mary-Ann", "Melanie", "Melinda", "Melissa", "Mhairi", "Madaline", "Megan", "Mollie", "Michelle", "Nicola", "Nikki", "Nadine", "Neve", "Nicole", "Niamh", "Maomi", "Nancy", "Natalie", "Natalia", "Natasha", "Olivia", "Poppy", "Pam", "Pamela", "Paige", "Patricia", "Pauline", "Phoebe", "Penny", "Polly", "Poppy", "Rosie", "Rachel", "Rachael", "Roslyn", "Rebecca", "Rhianna", "Robyn", "Rose", "Ruby", "Ruth", "Sam", "Sophie", "Sarah", "Sabrina", "Sacha", "Sophia", "Samantha", "Scarlett", "Sandra", "Sofia", "Sasha", "Savannah", "Sally", "Sandi", "Sara", "Selena", "Shanna", "Shannon", "Sharon", "Shauna", "Shiela", "Shirley", "Stacey", "Stephanie", "Susan", "Sue", "Summer", "Suzanne", "Siobhan", "Tamara", "Tammy", "Tara", "Tayler", "Tina", "Tori", "Toni", "Tracey", "Teresa", "Theresa", "Tiffany", "Trish", "Vanessa", "Victoria", "Vanessa", "Veronica", "Vicki", "Valerie", "Vicky", "Wendy", "Yasmin", "Yvonne", "Zara", "Zahra", "Zoe"];

let surname = ["Smith", "Johnson", "Williams", "Jones", "Garcia", "Miller", "David", "Rodriguez", "Martinez", "Wilson", "Anderson", "Thomas", "Tayler", "Moore", "Martin", "Harris", "Sanchez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Forbes", "Green", "White", "Black", "Adams", "MacDonald", "McDonald", "Dunn", "Nelson", "Baker", "Hall", "Campbell", "Mitchell", "Richardson", "Brown", "Turner", "Diaz", "Edwards", "Collins", "Stewart", "Robertson", "Murphy", "Morris", "Cook", "Rogers", "Cooper", "Reed", "Reid", "Ward", "Wood", "Benne", "Gray", "Grey", "Hughes", "Prince", "Sanders", "Long", "Foster", "Taylor", "Lee", "Thompson", "Jackson", "Clarke", "Knight", "Fletcher", "Wheeler", "Chapman", "Baxter", "Lister", "Tait", "Davies", "Fitz", "Shaw", "Townsend", "Hill", "Stevenson", "Davidson", "Richards", "Calder", "Clifford", "Brooks", "Watson", "Payne", "Burton", "McLean", "Macleod", "Banks", "Hynd", "Kerr", "Murray", "Simpson", "Clark", "Pearce", "Evans", "McCarthy", "Henderson", "Rose",  "Walls", "Hart", "O\'Neill", "McGowan", "Patterson", "Combs", "Ramsey", "Norton", "Norman", "Atkins", "Shepherd", "Parsons", "Thornton", "Birch", "Oak", "Marshall", "O\'Connor", "Rowe", "Gregory", "Kennedy", "O\'Donnell", "Phillips", "Specter", "Pearson", "Benjamin", "Ritchie", "Rettie", "Armstrong", "Jamieson", "Gibson", "Cunningham", "McGregor", "Hay", "McNab", "Samson", "Hancock", "Haynes", "Waters", "West", "Todd", "Lloyd", "Archer", "Dawson", "O\'Sullivan", "Barber", "Jennings", "Lane", "Wilkins", "Middleton", "Barnett", "Robson", "Briggs", "Whitehouse", "Reeves", "Carpenter", "Griffin", "Hope", "Newman", "Fitzgerald", "May", "Holden", "Bruce", "Gould", "Holland", "Woodward", "Bell", "Poole", "Day", "Bird", "Skinner", "Watts", "Holmes", "Thorpe", "Saunders", "Kemp", "Spencer", "Vaughn", "Simmons", "Dixon", "Duncan", "Hunter", "Slater", "Davison", "Welch", "Clements", "Wilkinson", "Heath", "Farrell", "Abbott", "Dyer", "Rahmam", "Gallagher", "O\'Brien", "Rice", "Bates", "Gordon", "Bryant", "Bray", "Peacock", "Dodd", "Hilton", "Sims", "Page", "Winter", "Harrison", "Davey", "Marsden", "Jenkins", "Wallace", "Little", "Hannah", "Howell", "Farmer", "Austin", "Bradshaw", "Henry", "Elliot", "Sanderson", "Benson", "Weston", "Peters", "Hobbs", "Iqbal", "Barker", "Williamson", "Atkinson", "Hutchinson", "Sharp", "Swift", "Coates", "Burns", "Tomlinson", "Cole", "Fuller", "Lees", "Potter", "Howard", "Nash", "Lamb", "Manning", "Duffy", "Parker", "Wells", "McKenzie", "MacKenzie", "Browne", "Houghton", "Bolton", "Nicholls", "Harding", "Warner", "Marsh", "Stephenson", "Mellor", "Chadwick", "Wall", "Bond", "Kelly", "Owens", "Yates", "Holloway", "Bailey", "Hartley", "Glover", "Webb", "Sutton", "Pollard", "Baldwin", "Bennett", "Kirby", "Stanley", "Smart", "Pepper", "McColl", "Greene", "Cruickshank", "Cosgrove", "Ramsay", "McCluskey", "Cassells", "Hume", "Gent", "Stiles", "Christie", "McKinnon", "Pringle", "McNab", "Stokes", "Field", "Patel", "Ross", "Donnelly", "Lambert", "Gibbons", "Jordan", "Freeman", "Burrows", "Jarvis", "Lynch", "Craig", "Parkes", "Doyle", "Rhodes", "Ferguson", "Ashton", "Wyatt", "Rowley", "Hunt", "Law", "Holden", "Turnbull", "Preston", "Newton", "Hargreaves", "Berry", "Lyons", "Fry", "Powell", "Carr", "Sharpe", "Schofield", "Hawkins", "Knowles", "Reynolds", "Butcher", "Osbourne", "Crawford", "Faulkner", "Burke", "Pickering", "Flynn", "Fleming", "Vincent", "Noble", "Kaur", "Kirk", "Greenwood", "Webster", "Kent", "Quin", "Hyde", "Parkinson", "Graham", "Gardiner", "Sinclair", "Metcalfe", "Welche", "Morton", "Ellis", "Hanson", "Cartwright", "Sheppard", "Tucker", "Short", "Shore", "Carter", "Hurst", "Hicks", "Russell", "Dickson", "Stone", "Bull", "Matthews", "Walton", "Buckley", "Finch", "Khan", "Brent", "Fairley", "Deans", "Blyth", "Morrison", "McKee", "Brock", "Dunlop", "Hardy", "Ball", "McKenna", "McKendrick","Roland", "Devine", "Pollock", "Snow", "Witcher", "Glassford", "Gillett", "McKie", "Purdie", "Lucas", "McGinty", "Quinn", "Blackburn", "MacLachlan", "MacKay", "Fitzpatrick", "Mills", "Sweeney", "Harte", "Malik", "McLennan", "O'Connoll", "Frost", "Goodman", "Nightingale", "Moss", "Bradford", "MacInnes", "Urban", "Lowe", "Whyte", "Milne", "MacNeil", "McNeill", "Flemming", "Roberts", "Fowler", "McLaren", "Clancy", "Kim", "Hogg", "MacManus", "Frankson", "McCusker", "Johnston", "McPherson","Hodges", "Ralston", "MacGregor", "Pettigrew", "Hendry", "Gilmour", "Robins", "Orr", "Forrest", "Sutherland", "Lasky", "Halsey", "Thorne", "Mendez", "Ramos", "Tanaka", "Locke", "Cutter",  "Keyes", "Hood", "Sullivan", "Hendley", "Vale", "Demarco", "Roland", "Palmer", "Vickers", "Kellogg", "Markle", "Chang", "Hooper", "Park", "Munro", "McCormack", "Doherty", "Cavanagh", "Cavanaugh", "Gunn", "Higgins", "Curtis", "Swan", "Peck", "Ahmed", "Maxwell", "Lennon", "Barrett", "Irvine", "Dalgleish", "McMillan", "Somerville", "Grierson", "Malone", "Dale", "Cochran", "McFarlane", "Mann", "McFazdean", "Dean", "Cox", "Goodfellow", "Whitmore", "Muir", "Hopkins", "Dudley", "Larson", "MacRoberts", "Langley", "Muirhead", "McDowell", "MacAndrew", "Ashford", "Hamlin", "McGill", "Gately", "Salmon", "Harwood", "Osborne", "Wessing", "Mason", "MacFarlane", "Hawthorn", "Hemlock", "Sycamore", "Pine", "Juniper", "Elm", "Whitebeam", "Cedar", "Aspen", "Ash", "Walnut", "Willow", "Cherry", "Halford", "Hardie", "Smalls", "Herd", "Sterling", "Lewin", "Maguire", "Watkins", "Delaney", "Poulson", "Braithwaite", "Christensan", "Rafferty", "Schwarz", "Ketchum", "Rowan", "Brannigan", "Rodríguez", "Farnsworth", "Conrad", "Wong", "Wernstrom", "Nixon", "Tate", "McDougall", "Abbett", "Abrahams", "Accord", "Ackerman", "Addington", "Grimes", "Colman", "Siggard", "Peletier", "Morales", "Jenner", "Kutner", "Foreman", "Chase", "Penn", "Laurie", "Jacoboson", "Wilde", "Dutton", "McQueen", "Durst", "Alderson", "Wellick", "Cortez", "Moss", "Price", "Goddard", "Trenton", "Goodwin", "Reynolds", "McIntyre", "Healy", "Patel", "Flores", "Nottingham", "Whitaker", "Walsh", "Moreland", "Fulton", "Halpert", "Vickers", "Carell", "Novak", "Hannon", "Sabre", "Deluca", "McKidd", "Dempsey", "Webber", "Altman", "Avery", "Kepner", "Riggs", "Hahn", "Chambers", "Stevens", "Robbins", "Torres", "Sloan", "O\'Malley", "Schmitt", "McDonnell", "Spalding", "Herrmann", "Helm", "Harper", "Montgomery", "Hutchison", "Klein", "Hutchins", "Morgan", "Kirkwood", "Shelby", "Solomans", "Stark", "Gold", "Changretta", "Bryne", "Kimber", "Boswell", "Chaplin", "MacMillan", "Devlin", "Strong", "Fenton", "McCumisky", "McAnulty", "Boyle", "Maclean", "Douglas", "Donaldson", "Santiago", "Riley", "Woods", "MacTavish", "Bowman", "Booth", "Coen", "Foley", "Valentia", "Griggs", "Ingram", "Koopman", "Markhov", "McLaughlin", "O\'Leary", "Ramirez", "Rivers", "Rutherford", "Schmitt", "Sumners", "Marek", "Wade", "Weaver", "Knott", "Posner", "Zane", "Murdock", "Becker", "Hogarth", "Phelps", "Hoffman", "Meyer", "Wynn", "Stein", "Schmidt", "Daniels", "Firth", "Robinovitch", "Milton", "Ducksworth", "Finley", "Sweeny", "McShane", "Blackwood", "Potts", "Gardner", "Cheney", "Hawking", "Runne", "Donnell", "Whitehead", "O\'Malley", "Jenson", "Sherman", "Bridges", "Woodcock", "Ferrall", "Groves", "Walford", "Martell", "Lazarus", "Cassell", "Summer", "Spring", "Eldridge", "Porter", "Garrett", "Kirkman", "McLellan", "Lawson", "Buchanan", "Haywood", "Riddell", "Rayburn", "McDermitt", "McBride", "Payton", "Shelton", "Polson", "Barnes", "Coleman", "Berkeley", "McIntosh", "Singleton", "Mahoney", "Monroe", "Finn", "Silverman", "Prescott", "Butler", "Boyd", "Davenport", "Crane", "Carroll", "McCay", "Parks", "Cain", "Whittle", "Rowland", "Gorman", "Blackwell", "Brett", "Ormiston", "Ziegler", "Carlock", "Bachelor", "McCullough", "Crain", "Coulter", "McCracken", "Hoover", "Buckingham", "Kirkpatrick", "Galbraith", "Flanagan", "Marston", "Waddell", "McLeod", "Coppersmith", "Whitman", "Kearney", "Millar", "Thomson", "Hardwick", "Burney", "Bernhard", "Fisher", "McAdams", "Kellogg", "Fleetwood", "Eisenberg", "Sparks", "Barr", "McCreary", "Gonzales", "Wheaton", "McEleney"];

const firstName = maleNames.concat(femaleNames);

function generateName() {
    getFirstName = Math.floor(Math.random() * firstName.length);
    let generatedFirstName = firstName[getFirstName];
    getSurname = Math.floor(Math.random() * surname.length);
    let generatedSurname = surname[getSurname];
    document.getElementById("fullname").value = generatedFirstName + " " + generatedSurname;
    // ! Matter Number
    let result = generatedSurname.substring(0, 3);
    let result1 = result.toUpperCase();
    result2 = result1 + "01" + "-" + "01";
    console.log(result2);
    // ? Create new card for matter numebr and add function to write value
}

// function generateMatterNumber() {
//     let result = generatedSurname.substring(0, 3);
//     let result1 = result.toUpperCase();
//     result2 = result1 + "01" + "-" + "01";
//     console.log(result2);
//  }

//  generateMatterNumber();

//! NUMBERS

// function generateRandomNumber() {
//     let RndInteger = Math.floor(Math.random() * 1000);
//     document.getElementById('generatedNumber').value = RndInteger;
// }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomAmount(min, max) {
    return Math.random() * (max - min) + min;
}

function generateRandomNumber() {
    let number = parseFloat(getRandomAmount(0, 250000).toFixed(2));
    document.getElementById('number').value = number;
}

//! Functions for random numbers and characters

function generateCharacter(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function generateNumber(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// 1, i, l, 0, o removed (incl. caps) to avoid confusion between each other

function generateMixed(length) {
    var result           = '';
    var characters       = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

//! Password Generator

function assignPassword() {
    const password = generateMixed(12);
    document.getElementById("generatedPassword").value = password;
}


//! Chained Password

function assignApplePass() {
    const password1 = generateMixed(5)
    const password2 = generateMixed(5)
    const password3 = generateMixed(5)
    const applePass = password1 + "-" + password2 + "-" + password3;
    document.getElementById("applePass").value = applePass;
}

//! Address Generator

const streetPrefix = ['Oak', 'Birch', 'Willow', 'Beech', 'Spruce', 'Walnut', 'Cherry', 'Maple', 'Alder', 'Ash', 'Aspen', 'Cedar', 'Elm', 'Hawthorn', 'Hemlock', 'Hornbeam', 'Juniper', 'Lime', 'Pine', 'Sycamore', 'Whitebeam', 'Yew', 'High', 'Church', 'Park', 'Main', 'Queens', 'Kings', 'Grange', 'New', 'Mill', 'North', 'East', 'South', 'West'];
 
const streetName = ['Road', 'Lane', 'Avenue', 'Boulevard', 'Street', 'Grove', 'Crescent', ]

const town = ['Avon', 'Bedfordshire', 'Berkshire', 'Buckinghamshire', 'Cambridgeshire', 'Cheshire', 'Cleveland', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham', 'East-Sussex', 'Essex', 'Gloucestershire', 'Hampshire', 'Herefordshire', 'Hertfordshire', 'Isle-of-Wight', 'Kent', 'Lancashire', 'Leicestershire', 'Lincolnshire', 'London', 'Merseyside', 'Middlesex', 'Norfolk', 'Northamptonshire', 'Northumberland', 'North-Humberside', 'North-Yorkshire', 'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire', 'Somerset', 'South-Humberside', 'South-Yorkshire', 'Staffordshire', 'Suffolk', 'Surrey', 'Tyne-and-Wear', 'Warwickshire', 'West-Midlands', 'West-Sussex', 'West-Yorkshire', 'Wiltshire', 'Worcestershire', 'Avon', 'Bedfordshire', 'Berkshire', 'Buckinghamshire', 'Cambridgeshire', 'Cheshire', 'Cleveland', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon', 'Dorset', 'Durham', 'East Sussex', 'Essex', 'Gloucestershire', 'Hampshire', 'Herefordshire', 'Hertfordshire', 'Isle of Wight', 'Kent', 'Lancashire', 'Leicestershire', 'Lincolnshire', 'London', 'Merseyside', 'Middlesex', 'Norfolk', 'Northamptonshire', 'Northumberland', 'North Humberside', 'North Yorkshire', 'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire', 'Somerset', 'South Humberside', 'South Yorkshire', 'Staffordshire', 'Suffolk', 'Surrey', 'Tyne and Wear', 'Warwickshire', 'West Midlands', 'West Sussex', 'West Yorkshire', 'Wiltshire', 'Worcestershire', 'Clwyd', 'Dyfed', 'Gwent', 'Gwynedd', 'Mid-Glamorgan', 'Powys', 'South-Glamorgan', 'West-Glamorgan', 'Clwyd', 'Dyfed', 'Gwent', 'Gwynedd', 'Mid Glamorgan', 'Powys', 'South Glamorgan', 'West Glamorgan', 'Aberdeenshire', 'Angus', 'Argyll', 'Ayrshire', 'Banffshire', 'Berwickshire', 'Bute', 'Caithness', 'Clackmannanshire', 'Dumfriesshire', 'Dunbartonshire', 'East-Lothian', 'Fife', 'Inverness-shire', 'Kincardineshire', 'Kinross-shire', 'Kirkcudbrightshire', 'Lanarkshire', 'Midlothian', 'Moray', 'Nairnshire', 'Orkney', 'Peeblesshire', 'Perthshire', 'Renfrewshire', 'Ross-shire', 'Roxburghshire', 'Selkirkshire', 'Shetland', 'Stirlingshire', 'Sutherland', 'West Lothian', 'Wigtownshire', 'Aberdeenshire', 'Angus', 'Argyll', 'Ayrshire', 'Banffshire', 'Berwickshire', 'Bute', 'Caithness', 'Clackmannanshire', 'Dumfriesshire', 'Dunbartonshire', 'East Lothian', 'Fife', 'Inverness-shire', 'Kincardineshire', 'Kinross-shire', 'Kirkcudbrightshire', 'Lanarkshire', 'Midlothian', 'Moray', 'Nairnshire', 'Orkney', 'Peeblesshire', 'Perthshire', 'Renfrewshire', 'Ross-shire', 'Roxburghshire', 'Selkirkshire', 'Shetland', 'Stirlingshire', 'Sutherland', 'West Lothian', 'Wigtownshire', 'Antrim', 'Armagh', 'Down', 'Fermanagh', 'Londonderry', 'Tyrone']; 

function getStreetPrefix() {
    return Math.floor(Math.random() * streetPrefix.length);
}

function getStreetName() {
    return Math.floor(Math.random() * streetName.length);
}

function getTown() {
    return Math.floor(Math.random() * town.length);
}

// Onlick function
function generateAddress() {
    const generatedNumber = getRandomInt(1000);
    const generatedStreetPrefix = getStreetPrefix();
    const generatedStreetName = getStreetName();
    const generatedTown = getTown();
    const generatedPostcode1 = generateCharacter(2);
    const generatedPostcode2 = generateNumber(2);
    const generatedPostcode3 = generateNumber(1)
    const generatedPostcode4 = generateCharacter(2)
    const fullPostcode = generatedPostcode1 + generatedPostcode2 + " " + generatedPostcode3 + generatedPostcode4;
    document.getElementById("address").value = generatedNumber + " " + streetPrefix[generatedStreetPrefix] + " " + streetName[generatedStreetName] + ", " + town[generatedTown] + ", " + fullPostcode;
}

//! Mobile Number Generator

function generateMobile() {
    const mobileNumber = "07" + generateNumber(9);
    document.getElementById("mobileNumber").value = mobileNumber;
}

//! Generate sort code


// function generateSortCode() {
//     let sortcode1 = generateNumber(6);
//     document.getElementById("sortCode").value = sortcode1;
// }

function formatSortCode(str) {
    return (String(str).match(/.{1,2}/g) || []).join('-');
}

formatSortCode(123456789);

function generateSortCode() {
    let sortcode2 = generateNumber(6);
    let sortcode3 = formatSortCode(sortcode2);
    document.getElementById("sortCode").value = sortcode3;
}

//! Generate account number

function generateAccountNumber() {
    const accountnumber1 = generateNumber(4);
    const accountnumber2 = generateNumber(4);
    document.getElementById("accountNumber").value = accountnumber1 + " " + accountnumber2;
}

//! Banks

const banks = ["Bank of Scotland", "Halifax", "Lloyds", "Royal Bank of Scotland", "NatWest", "HSBC", "Barclays", "Clydesdale", "Virgin Money", "Santander", "Nationwide Building Society", "Bank of Ireland", "Metro Bank", "TSB Bank", "Starling", "Monzo", "Tide", "Yorkshire Building Society", "Bank of Ireland", "Accord Mortgages", "First Direct", "Sainsbury\'s Bank", "Scottish Building Society", "Tesco Bank", "The Co-operative Bank", "Couttes & Co", "Coventry Building Society", "M&S Bank", "Aldermore", "Atom Bank", "Skipton Building Society", "The Post Office", "L&C", "Leeds Building Society", "Newcastle Building Society", "Danske Bank", "Coventry Building Society", "Investec Specialist Bank", "Masthaven Bank", "Shawbrook Bank", "Handelsbanken"]

function generateBank() {
    getBanks = Math.floor(Math.random() * banks.length);
    let generatedBank = banks[getBanks];
    document.getElementById("bank").value = generatedBank;
}

//! IBAN

// function generateIban() {
//     const countryCode = generateCharacter(2);
//     const checkDigits = generateNumber(2);
//     const bban = generateCharacter(4) + generateNumber(6) + generateNumber(8);
//     document.getElementById("iban").value = countryCode + checkDigits + bban;
// }

const countryCode = ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "MK", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX"]

const bankCode = ["AIBK", "ALDB", "ATMB", "BOFS", "BARC", "HOAB", "CLRB", "CLYD", "CPBK", "COUT", "GOLD", "HLFX", "MIDL", "CHAS", "LOYD", "MYMB", "MONZ", "NWBK", "REVO", "RBSS", "SANB", "ABBY", "SWIB", "WWLL", "SRLG", "TANM", "TSBS", "ULSB", "NRNB", "YORK"]

// NEW RANDOM NUMBER TEST

const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// Example
randomArrayInRange(10, 99, 1); // Output 1 number between 10 - 99


function generateIban() {
    const countryCode = "GB";
    const checkDigits = randomArrayInRange(10, 99, 1);
    const bankCode1 = Math.floor(Math.random() * bankCode.length);
    const generatedBankCode = bankCode[bankCode1];
    const sortCode = randomArrayInRange(100000, 999999, 1);
    const accountNumber = randomArrayInRange(10000000, 99999999, 1);
    document.getElementById("iban").value = countryCode + checkDigits + generatedBankCode + sortCode + accountNumber;
}

//! SWIFT

function generateSwift() {
    const bankCode = generateCharacter(4);
    const countryCode = generateNumber(2);
    const locationCode = generateCharacter(2);
    const branchCode = generateCharacter(2);
    document.getElementById("swiftCode").value = bankCode + countryCode + locationCode + branchCode;
}

//? Deleted these?
const newArray = surname.sort();

//! Work type

const workType = ["Company Incorporation", "Contracts", "Corporate Services", "Governance", "Insolvencies", "Mergers & Acquisitions", "Partnerships", "Purchase of Business & Franchise", "Sale of Business & Franchise", "Commercial Lease", "Commercial Purchase", "Commercial Sale", "Commercial Transfer", "Planning & Development", "Refinance", " Buy to Let", "New Build Purchase", "New Build Sale", "Purchase", "Registration", "Remortgage", "Sale", "Tenancy", "Transfer", "High Court", "Justice of the Peace Court", "Post-Conviction Case", "Potential Case", "Sheriff Appear Court", "Sheriff Court (Solemn)", "Sheriff Court (Summary)", "Employment", "Estate Dispute", "Executry", "Children - Adoption", "Children - Child Care", "Children - Private Child Proceeding", "Family", "Financial", "Divorce & Dissolution", "Pre & Post Nuptial Agreements", "Mediation", "Appeal", "Asylum", "Entry Clearence", "Immigration", "Leave to Remain", "Nationality", "Copyright", "Intellectual Property General", "Patents", "Trade Marks", "Debt Recovery", "Litigation", "Ordinary Cause", "Property Disputes", "Simple Procedure", "Summary Cause", "Bankruptcy", "Civil Proceedings", "Consuler General", "Eduction", "Entertainment and Media Law", "Generic", "Housing", "Licensing", "Mental Health", "Clinical Negligence", "Personal Injury", "Road Traffic Accident", "Accounting", "Advice", "General", "Miscellaneous", "Management of Affairs", "Power of Attorney", "Trusts", "Wills", "Wills & Power of Attorney"];

function generateWorkType() {
    let getworkType = Math.floor(Math.random() * workType.length);
    let generatedworkType = workType[getworkType];
    document.getElementById("workType").value = generatedworkType;
}

// ! UUID Generator

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function generateUUID() {
    generatedUUID = uuidv4();
    document.getElementById("uuid").value = generatedUUID;
}

// ! Landlines

// ! copyToClipboard function

// function copyToClipboard(id) {
//     var copyText = document.getElementById(id);
//     var textArea = document.createElement("textarea");
//     textArea.value = copyText.textContent;
//     document.body.appendChild(textArea);
//     textArea.select();
//     document.execCommand("Copy");
//     textArea.remove();
// }

function copyToClipboard(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// ! New navbar logic

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}



// ? Not in use

// ! Event Listeners 
// toggle.addEventListener("click", toggleMenu, false);
// for (let item of items) {
//   if (item.querySelector(".submenu")) {
//     item.addEventListener("click", toggleItem, false);
//   }
//   item.addEventListener("keypress", toggleItem, false);
// }

// document.addEventListener("click", closeSubmenu, false);

// ! Store & Retrieve themes in local storage

// Select the button
//const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
//const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
//if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  //document.body.classList.add("dark-theme");
//}

// Listen for a click on the button 
//btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  //document.body.classList.toggle("dark-theme");
  
  // Let's say the theme is equal to light
  //let theme = "light";
  // If the body contains the .dark-theme class...
  //if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    //theme = "dark";
  //}
  // Then save the choice in localStorage
  //localStorage.setItem("theme", theme);
//});

// ! Old navbar logic 

// function updatePageName() {
//     let text = document.getElementById("active").innerHTML;
//     document.getElementById("pagename").textContent = text;
// }

// updatePageName();

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }