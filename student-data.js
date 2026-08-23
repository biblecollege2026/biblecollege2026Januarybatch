// student-data.js
// Bible College of India - Student Data Storage

const STUDENT_DATA = {
    // Academic Performance Data
  // Academic Performance Data
    marks: {
        'rutujabandelu@gmail.com': { name: 'Rutuja Bandelu', marks: [97.5, 100, 97, 100, 100, 100, 98], offlineMark: 81.00 },
        'jyotilokhande59928@gmail.com': { name: 'Jyoti Lokhande', marks: [82.5, 96, 100, 99, 100, 91, 100], offlineMark: 83.00  },
        'harshallokhande6792@gmail.com': { name: 'Harshal Lokhande', marks: [62, 99, 100, 100, 79, 99.5, 98.5], offlineMark: 75.00  },
        'bordesinaya7@gmail.com': { name: 'Sinaya Borde', marks: [null, null, null, 100, 100, 99, 100], offlineMark: 65.00 },
        'marshal6792@gmail.com': { name: 'Marshal Lokhande', marks: [95.5, 100, 100, 100, 100, 100, 100], offlineMark: 79.50  },
        'varshapagare66@gmail.com': { name: 'Varsha Pagare', marks: [93.5, 95, 96, 92, 93, 100, 100], offlineMark: 51.50 },
        'kumudsalve76@gmail.com': { name: 'Kumudini Salve', marks: [98, 95, 94, 100, 82, 98, 100], offlineMark: 66.5 },
        'nutandaniel7@gmail.com': { name: 'Nutan Daniel', marks: [72.5, 79, null, null, 97, null, 100], offlineMark: 45.00  },
        'meghadhusia09june@gmail.com': { name: 'Megha dhusia', marks:     [null, 48, 100, 40, null, null, null], offlineMark: 49.5 },
        'jlibiblecollege@gmail.com': { name: 'Bible College Admin', marks: [], offlineMark: 0 },
        
        
    },

    // Student Profile Information
    profiles: {

'harshallokhande6792@gmail.com': {
  name: 'Harshal Mahesh Lokhande',
  address: 'Amruta Colony, Shwetayan Apartment, Flat No 9, 3rd Floor, Pimple Gurav, Pune - 61',
  mobile: '9158861312',
  mobile2: '9923845443',
  dob: '8/24/2000',
  age: 25,
  gender: 'Male',
  education: 'Bachelor In Zoology. Graduate.',
  occupation: 'Business, Ministry',
  marital: 'Single',
  church: 'All Saint’s Marathi Church Khadki',
  pastor: 'Pastor Nandprakash Amolik',
  reference1: 'Rutuja Bandelu - 8999861125',
  reference2: 'Marshal Lokhande - 9923845443',
  futurePlan: 'To Preach The Gospel. Heal The Sick. Make Disciples. Serving God & Serving People Across The Nations.'
},

'marshal6792@gmail.com': {
  name: 'Marshal Mahesh Lokhande',
  address: 'Amruta Colony, Shwetayan Appt, Flat No 9, Pimple Gurav, Pune - 411061',
  mobile: '9923845443',
  mobile2: '9158861312',
  dob: '5/4/2004',
  age: 20,
  gender: 'Male',
  education: 'Graduate',
  occupation: 'None',
  marital: 'Single',
  church: 'All Saints Marathi Church, Khadki.',
  pastor: 'Pastor Nandprakash Amolik',
  reference1: 'Sinaya Borde - 7350425740',
  reference2: 'Harshal Lokhande - 9158861312',
  futurePlan: 'Preaching the Gospel, Healing the sick, Serving God and Serving People, Taking Gospel to every city, state and nation.'
},

'rutujabandelu@gmail.com': {
  name: 'Rutuja Nitin Bandelu',
  address: 'B-12 , Sukhwani Baug Adinath Nagar Bhosari 39',
  mobile: '8999861125',
  mobile2: '9158861312',
  dob: '12/13/2002',
  age: 23,
  gender: 'Female',
  education: 'B.com Graduated. Currently pursuing MBA',
  occupation: 'Ministry',
  marital: 'Single',
  church: 'Christ Church',
  pastor: 'Pastor Lavhale',
  reference1: 'Harshal Lokhande - 9158861312',
  reference2: 'Sinaya Borde - 7350425740',
  futurePlan: 'Serving God and Serving People . Heal the Sick.'
},

'jyotilokhande59928@gmail.com': {
  name: 'Mrs Jyoti Mahesh Lokhande',
  address: 'Shwetayan Appt, Flat no 9, 3rd floor, Amruta Colony, Pimple Gurav, Pune 411061',
  mobile: '9404227652',
  mobile2: '9923845443',
  dob: '2/6/1975',
  age: 51,
  gender: 'Female',
  education: 'MA B.Ed',
  occupation: 'Service',
  marital: 'Married',
  church: 'All Saints Marathi Church Khadki Pune',
  pastor: 'Rev. N.S. Amolik',
  reference1: 'Siyona Borde - 8805008273',
  reference2: 'Rutuja Bandelu - 8999861125',
  futurePlan: 'देवाच्या राज्यासाठी आत्माजिंकणे संडेस्कूल च्या लेकरांना वचनाचे महत्व योग्य प्रकारे शिकवणे'
},

'bordesinaya7@gmail.com': {
  name: 'Sinaya Borde',
  address: '202, 2nd floor, Kute Fortune, Sai Nagar, Dehuroad, Mamurdi 412101',
  mobile: '7350425740',
  mobile2: '8805008273',
  dob: '8/22/2008',
  age: 17,
  gender: 'Female',
  education: 'Appearing for 12th',
  occupation: 'None',
  marital: 'Unmarried',
  church: 'Follow Jesus Church Association',
  pastor: 'Pastor Amol & Pastor Siyona Borde',
  reference1: 'Amol Borde - 8805008272',
  reference2: 'Siyona Borde - 8805008273',
  futurePlan: 'Not Specified'

},

'nutandaniel7@gmail.com': {
  name: 'Nutan Prakash Daniel',
  address: '411046',
  mobile: '7057168373',
  mobile2: '8007819259',
  dob: '5/27/1963',
  age: 63,
  gender: 'Female',
  education: 'Nurse',
  occupation: 'None',
  marital: 'Married',
  church: 'Not Specified',
  pastor: 'Not Specified',
  reference1: 'Sharel Daniel - 8007819259',
  reference2: 'Shobha Daniel - 9604611156',
  futurePlan: 'Preaching'
},

'varshapagare66@gmail.com': {
  name: 'Varsha Sujeet Pagare',
  address: 'Shiwalay Height, Satyajyoth Colony, Near Fish Market First Floor, Shirwal 412801',
  mobile: '7620155277',
  mobile2: '9158395325',
  dob: '6/22/1984',
  age: 41,
  gender: 'Female',
  education: '12th Passed',
  occupation: 'None',
  marital: 'Married',
  church: 'Hope of Faith Church',
  pastor: 'Pastor Paul Bobby Das',
  reference1: 'Kishor Ingawale - 7875093840',
  reference2: 'Sujeet Pagare - 9158395325',
  futurePlan: "God's Will"
},

'kumudsalve76@gmail.com': {
  name: 'Kumudini Ashish Salve',
  address: 'Amba Nagri BLD NO 9 Flat No G-6, Dhanori Rd Vishrantwadi, Pune -411015',
  mobile: '8087533619',
  mobile2: '9823378850',
  dob: '9/7/1976',
  age: 49,
  gender: 'Female',
  education: 'M Com',
  occupation: 'Business, Ministry',
  marital: 'Married',
  church: 'Gospel Assembly Church',
  pastor: 'Pastor Joy Disilva',
  reference1: 'Smita Sathe',
  reference2: 'Sushma Patole',
  futurePlan: 'Serving of God'

},
        'jlibiblecollege@gmail.com': {
            name: 'Bible College Admin',
            address: 'Bible College of India',
            mobile: 'N/A',
            dob: 'N/A',
            age: 'N/A',
            gender: 'N/A',
            education: 'N/A',
            occupation: 'Administrator',
            marital: 'N/A',
            church: 'Jesus Loves India Church Foundation',
            pastor: 'N/A',
            reference1: 'N/A',
            reference2: 'N/A',
            futurePlan: 'Administering Bible College'
        }
    },

    // Exam months mapping (updated to include offline)
    examMonths: ['SEPTEMBER EXAM 2025', 'OCTOBER EXAM 2025', 'NOVEMBER EXAM 2025', 'DECEMBER EXAM 2025', 'JANUARY EXAM 2026', 'FEBRUARY EXAM 1 ', 'FEBRUARY EXAM 2', 'OFFLINE EXAM MARCH 2026']
};
