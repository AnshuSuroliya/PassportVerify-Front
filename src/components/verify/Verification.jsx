import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { verifyPassport } from "../../User/reducers/Verify";
import { authenticateWithGoogle, handleCallback, listFiles } from "../../User/Gdrive";
import useDrivePicker from "react-google-drive-picker";
import { gapi } from 'gapi-script'
import { FileInput, Label } from 'flowbite-react';
import axios from "axios";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
const Verification=()=>{
    const dispatch=useDispatch();
    const [data,setData]=useState({});
    const [file,setFile]=useState();
    const [message,setMessage]=useState();
    const [message1,setMessage1]=useState();
    const [message2,setMessage2]=useState();
    const [message3,setMessage3]=useState();
    const [message4,setMessage4]=useState();
    const [message5,setMessage5]=useState();
    const [message6,setMessage6]=useState();
    const [message7,setMessage7]=useState();
    const [message8,setMessage8]=useState();
    const [message9,setMessage9]=useState();
    const [valid,setValid]=useState();
    const navigate=useNavigate();
    const passportData=useSelector((state)=>state.verify.PassportData);
    const checkValidation=(e)=>{
        const rgExp=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        setData({ ...data, [e.target.name]: e.target.value });
        if(rgExp.test(data.email))
        {
          setMessage("")
         
        }
        else if(data.email==="")
        {
          setMessage("Please Enter email")
        }
        else if(!rgExp.test(data.email))
        {
          setMessage("Email is not valid")
        }
        else{
          setMessage("");
        }
      }
      const regEx=/^[a-zA-Z]+$/
      const handleChange1=(e)=>{
        
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx.test(data.firstName))
        {
          setMessage1("")
        }
        
        else if(!regEx.test(data.firstName))
        {
          setMessage1("First Name is not valid")
        }
        else{
          setMessage1("");
        }
      }
      const handleChange9=(e)=>{
        
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx.test(data.lastName))
        {
          setMessage9("")
        }
        
        else if(!regEx.test(data.lastName))
        {
          setMessage9("Last Name is not valid")
        }
        else{
          setMessage9("");
        }
      }
      const regEx2=/^[0-9]+$/
      const handleChange2=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx2.test(data.phoneNumber))
        {
          setMessage2("")
        }
        else if(data.phoneNumber==="")
        {
          setMessage2("Please Enter Number")
        }
        else if(!regEx2.test(data.phoneNumber))
        {
          setMessage2("Number is not valid")
        }
        else{
          setMessage2("");
        }
      }
      const handleChange3=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx2.test(data.zipcode))
        {
          setMessage3("")
        }
        else if(data.zipcode==="")
        {
          setMessage3("Please Enter Zipcode")
        }
        else if(!regEx2.test(data.zipcode))
        {
          setMessage3("Zipcode is not valid")
        }
        else{
          setMessage3("");
        }
      }
      const handleChange4=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx2.test(data.age))
        {
          setMessage4("")
        }
        else if(data.age==="")
        {
          setMessage4("Please Enter Age")
        }
        else if(!regEx2.test(data.age))
        {
          setMessage4("Age is not valid")
        }
        else{
          setMessage4("");
        }
      }

      const handleChange5=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx.test(data.city))
        {
          setMessage5("")
        }
        else if(data.city==="")
        {
          setMessage5("Please Enter City")
        }
        else if(!regEx.test(data.city))
        {
          setMessage5("City is not valid")
        }
        else{
          setMessage5("");
        }
      }
      const handleChange6=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx.test(data.state))
        {
          setMessage6("")
        }
        else if(data.state==="")
        {
          setMessage6("Please Enter State")
        }
        else if(!regEx.test(data.state))
        {
          setMessage6("State is not valid")
        }
        else{
          setMessage5("");
        }
      }
      const regEx3=/^[a-zA-Z0-9]+$/
      const handleChange7=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
        if(regEx3.test(data.addressLine1 && data.addressLine2))
        {
          setMessage7("")
        }
        
        else if(!regEx3.test(data.addressLine1 || data.addressLine2))
        {
          setMessage7("Address is not valid")
        }
        else{
          setMessage7("");
        }
      }
      const regEx4=/^[A-Z0-9]+$/
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        if(regEx4.test(data.passportNumber))
        {
          setMessage8("")
        }
        
        else if(!regEx4.test(data.passportNumber))
        {
          setMessage8("Passport Number is not valid")
        }
        else{
          setMessage8("");
        }
    }
    
    // const handleLogin = () => {
    //     authenticateWithGoogle();
    //   };
     
    //   const handleCallbackRequest = async () => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const code = urlParams.get('code');
    //     const auth = await handleCallback(code);
    //     const files = await listFiles(auth);
    //     console.log(files);
    // };
    const handleFile=(e)=>{
      const file=e.target.files[0];
      setData({...data,passportDoc:file});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
        let fdata=new FormData();
        
        fdata.append('firstName',data.firstName);
        fdata.append('lastName',data.lastName);
        fdata.append('email',data.email);
        fdata.append('phoneNumber',data.phoneNumber);
        fdata.append('addressLine1',data.addressLine1);
        fdata.append('addressLine2',data.addressLine2);
        fdata.append('city',data.city);
        fdata.append('state',data.state);
        fdata.append('zipcode',data.zipcode);
        fdata.append('age',data.age);
        fdata.append('passportNumber',data.passportNumber);
        fdata.append('passportDoc',data.passportDoc);
        console.log([...fdata.entries()]);
        dispatch(verifyPassport(fdata));
        if(passportData.message=="Registered Successfully"){
        setTimeout(()=>{
            navigate("/");
        },1000)
    }
    }
     
    const [openPicker,authResponse]=useDrivePicker();
    const [isLoadingGoogleDriveApi,setIsLoadingGoogleDriveApi]=useState(false);
    const [signedInUser,setSignedInUser]=useState(false);
    const [isFetchingGoogleDriveFiles,setIsFetchingGoogleDriveFiles]=useState(false);
    const [listDocumentsVisibility,setListDocumentsVisibility]=useState(false);
    const [documents,setDocuments]=useState(false);
     const handleClick=()=> {
       
    //     gapi.client.setApiKey("AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA");
    //     gapi.client.load("https://content.googleapis.com/discovery/v1/apis/discovery/v1/rest")
    //         .then(function() { console.log("GAPI client loaded for API"); },
    //               function(err) { console.error("Error loading GAPI client for API", err); });
    //               gapi.load("client");
    //   }
    //   // Make sure the client is loaded before calling this method.
    //   const execute=()=>{
    //      gapi.client.discovery.apis.list({
    //       "preferred": true
    //     })
    //         .then(function(response) {
    //                 // Handle the results here (response.result has the parsed body).
    //                 console.log("Response", response);
    //               },
    //               function(err) { console.error("Execute error", err); });
    //   }
    
      
        // const initClient = () => {
        //     setIsLoadingGoogleDriveApi(true);
        //     gapi.client
        //       .init({
        //         apiKey:'AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA',
        //     clientId:'414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com',
        //     discoveryDocs:'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        //     scope:'https://www.googleapis.com/auth/drive.readonly',
        //       })
        //       .then(
        //         function () {
        //           // Listen for sign-in state changes.
        //           gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        
        //           // Handle the initial sign-in state.
        //           updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        //         },
        //         function (error) {}
        //       );
        //   };
        //   gapi.load('client:auth2', initClient);
        //   const updateSigninStatus = (isSignedIn) => {
        //     if (isSignedIn) {
        //       // Set the signed in user
        //       setSignedInUser(gapi.auth2.getAuthInstance().currentUser.je.Qt);
        //       setIsLoadingGoogleDriveApi(false);
        //       // list files if user is authenticated
        //       listFiles();
        //     } else {
        //       // prompt user to sign in
        //       handleAuthClick();
        //     }
        //   };
          
        //    /**
        //    * List files.
        //    */
        //   const listFiles = (searchTerm = null) => {
        //     setIsFetchingGoogleDriveFiles(true);
        //     gapi.client.drive.files
        //       .list({
        //         pageSize: 10,
        //         fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
        //         q: searchTerm,
        //       })
        //       .then(function (response) {
        //         setIsFetchingGoogleDriveFiles(false);
        //         setListDocumentsVisibility(true);
        //         const res = JSON.parse(response.body);
        //         setDocuments(res.files);
        //       });
        //   };
        //   const handleAuthClick = (event) => {
        //     gapi.auth2.getAuthInstance().signIn();
        //   };
        // }
    //   setTimeout(()=>{
    //     if (window.gapi) {
    //       console.log('gapi is already loaded');
    //       console.log(window.gapi);
    //       initClient();
    //   }
    // },2000)
      
    
        // // If gapi is not available, wait for it to load
        // console.log('gapi is not loaded, loading it now');
        // const script = document.createElement('script');
        // script.src = 'https://apis.google.com/js/api.js';
        // script.onload = () => {
        //   gapi.load('client:auth2', initClient);
        // };
        // document.body.appendChild(script);
      
  // }
  // const initClient = async() => {
  //  window.gapi.load('client:auth2');
  //  await gapi.client.init({
  //     apiKey: 'AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA',
  //     clientId: '414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com',
  //     scope: 'https://www.googleapis.com/auth/drive.readonly'
  //   }).then(() => {
  //     // Listen for sign-in state changes.
  //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  //     // Handle the initial sign-in state.
  //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  //   });
    
  // };

  // const updateSigninStatus = (isSignedIn) => {
  //   if (isSignedIn) {
  //     initializePicker();
  //   }
  // };

  // const initializePicker = () => {
  //   // Use Google Picker API to pick a file from Google Drive
  //   // ... (Your picker initialization code remains unchanged)
  // };

  // const downloadImage = (fileId) => {
  //   // Use Google Drive API to download the selected file
  //   // ... (Your downloadImage function remains unchanged)
  // };

      // const handleSignIn = async () => {
      //   // Initialize Google API Client
      //   await initGoogleClient();
    
      //   // Sign in with Google
      //   const token = await signInWithGoogle();
      //   console.log('OAuth Token:', token);
      // };
    
      // const initGoogleClient = () => {
      //   return new Promise((resolve, reject) => {
      //     window.gapi.load('auth2', () => {
      //       window.gapi.auth2.init({
      //         client_id: '414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com',
      //       }).then(() => {
      //         resolve();
      //       }).catch((error) => {
      //         reject(error);
      //       });
      //     });
      //   });
      // };
    
      // const signInWithGoogle = () => {
      //   return new Promise((resolve, reject) => {
      //     const googleAuth = window.gapi.auth2.getAuthInstance();
      //     googleAuth.signIn().then((googleUser) => {
      //       const idToken = googleUser.getAuthResponse().id_token;
      //       resolve(idToken);
      //     }).catch((error) => {
      //       reject(error);
      //     });
      //   });
      // }
    
    
    //     // Load Google API client library
    //     const script = document.createElement('script');
    // script.src = 'https://apis.google.com/js/api.js';
    //     script.onload = () => {
    //       initializePicker();
    //     };
    //     document.body.appendChild(script);
     
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }
     
    //   const initializePicker = () => {
    //     window.gapi.load('picker', { callback: createPicker });
    //   };
    //   const createPicker = () => {
    //     const picker = new window.google.picker.PickerBuilder()
    //     .addView(window.google.picker.ViewId.DOCS)
    //           .setOAuthToken('414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com')
    //           .setDeveloperKey('AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA')
    //           .setCallback(pickerCallback)
    //           .build();
    //         picker.setVisible(true);
    //       };
    // const handleClick=()=>{
    //   window.gapi.load('picker', () => {
    //     // Create a Google Picker object
    //     const picker = new window.google.picker.PickerBuilder()
    //       .addView(window.google.picker.ViewId.DOCS)
    //       .setOAuthToken('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')
    //       .setDeveloperKey('AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA')
    //       .setCallback((data) => {
    //         if (data.action === window.google.picker.Action.PICKED) {
    //           const fileId = data.docs[0].id;
    //           console.log('File ID selected:', fileId);
    //         }
    //       })
    //       .build();
        
    //     // Open the Google Picker
    //     picker.setVisible(true);
    //   });
        openPicker({
            clientId:"414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com",
            developerKey:"AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA",
            token:"ya29.a0AfB_byBe44shdL2d-Ua2fug48GgWam4GyxsVRIt3rkWYFeT5jdNbqguDDnC286itWMV0z71Mwyom2gOS0efyoWLdRH8JKbhw6X04nAk3iVOmvArLoW9G3BfeL7FNRv5RHeSBWdwmAEs6dFN3ZepFX6GSnAzYeFF9ZC9SaCgYKAWQSARMSFQHGX2Mi-q5shPVQK4TaI4qmFQHfZA0171",
            viewId:"DOCS",
            showUploadView:true,
            showUploadFolders:true,
            supportDrives:true,
            multiselect:true
        })
       
    }
  //   gapi.load('client', function() {
  //     gapi.client.init({
  //       apiKey: 'AIzaSyDV8GcHfZqQBxLZdo6evrfjhsqMRftqhTA',
  //       clientId: '414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com',
  //       scope: 'https://www.googleapis.com/auth/drive.readonly'
  //     }).then(function() {
  //       // Initialization successful, you can now use the Picker API
       
  //     }, function(error) {
  //       console.error('Error initializing Google API client', error);
  //     });
  //   });
  //   function createPicker() {
  //     const picker = new gapi.picker.PickerBuilder()
  //       .addView(gapi.picker.ViewId.DOCS_IMAGES)
  //       .setOAuthToken(gapi.auth.getToken().access_token)
  //       .setDeveloperKey('YOUR_DEVELOPER_KEY')
  //       .setCallback(pickerCallback)
  //       .build();
  //     picker.setVisible(true);
  //   }
    
  //   function pickerCallback(data) {
  //     if (data.action === gapi.picker.Action.PICKED) {
  //       const fileId = data.docs[0].id;
  //       // Handle the selected file
  //     }
  //   }
  // }
    // const pickerCallback = (data) => {
    //     if (data.action === window.google.picker.Action.PICKED) {
    //     const fileId = data.docs[0].id;
    //           downloadFile(fileId);
    //         }
    //       };
    // const downloadFile = (fileId) => {
    //     const accessToken = window.gapi.auth.getToken().access_token;
    //     axios({
    // url: `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
    //       method: 'GET',
    //       responseType: 'blob',
    //       headers: {
    //         'Authorization': `Bearer ${accessToken}`
    //       }
    //     }).then(response => {
    //       const url = window.URL.createObjectURL(new Blob([response.data]));
    //       const link = document.createElement('a');
    //       link.href = url;
    //       link.setAttribute('download', 'downloaded_file.txt');
    //       document.body.appendChild(link);
    // link.click();
    //       link.remove();
    //     }).catch(error => {
    //       console.error('Error downloading the file:', error);
    //     });
    //   };
return(
    <div className="bg-gradient-to-br from-gray-300 to-gray-100 w-full p-1">
        
               <Nav/>
               
            <div className="w-5/12 flex justify-center mx-auto bg-white mt-24 shadow-2xl rounded-md mb-6">
                <form className="w-auto max-w-sm mt-4" method="POST" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-sans font-bold flex justify-center mb-6">Verify Passport</h2>
                <div className="flex flex-row">
                <div class="flex items-center border-b border-teal-500 py-2 mr-4">
            <input name="firstName" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="First Name" onChange={handleChange1}/>
            </div>
            <div class="flex items-center border-b border-teal-500 py-2">
            <input name="lastName" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="Last Name"  onChange={handleChange9}/>
                </div>
                
            </div>
            <div className="flex flex-row"><div><p className="text-red-500 text-xs italic">{message1}</p></div>
            <div><p className="text-red-500 text-xs italic ml-24">{message9}</p></div>
            </div>
  
                {/* <div className="flex items-center border-b border-teal-500 py-2">
           
                </div> */}
                <div class="flex items-center border-b border-teal-500 py-2">
            <input name="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="email" placeholder="Email"  onChange={checkValidation}/>
                </div>
                <div className=""><p className="text-red-500 text-xs italic">{message}</p></div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="phoneNumber" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="Contact Number" maxLength="10" onChange={handleChange2}/>
                </div>
                <div className=""><p className="text-red-500 text-xs italic">{message2}</p></div>
                <div className="flex flex-row">
                <div className="flex items-center border-b border-teal-500 py-2 mr-4">
            <input name="addressLine1" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="AddressLine1"  onChange={handleChange7}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="addressLine2" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="AddressLine2"  onChange={handleChange7}/>
                </div>
                </div>
                <div><p className="text-red-500 text-xs italic">{message7}</p></div>
                <div className="flex flex-row">
                <div className="flex items-center border-b border-teal-500 py-2 mr-4">
            <input name="city" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="City"  onChange={handleChange5}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="state" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="State"  onChange={handleChange6}/>
                </div>
                </div>
                <div className="flex flex-row"><div className=""><p className="text-red-500 text-xs italic">{message5}</p></div>
                <div className=""><p className="text-red-500 text-xs italic ml-32">{message6}</p></div></div>
                <div className="flex flex-row">
                <div className="flex items-center border-b border-teal-500 py-2 mr-4">
            <input name="zipcode" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" maxLength="6" placeholder="Zipcode"  onChange={handleChange3}/>
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="age" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="Age" maxLength="2" onChange={handleChange4}/>
                </div>
                </div>
                <div className="flex flex-row"><div><p className="text-red-500 text-xs italic">{message3}</p></div>
                <div className="ml-32"><p className="text-red-500 text-xs italic">{message4}</p></div>
                
                </div>
                <div className="flex items-center border-b border-teal-500 py-2">
            <input name="passportNumber" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-rounded outline-blue-500" required type="text" placeholder="Passport Number"  onChange={handleChange}/>
                </div>
                <div className=""><p className="text-red-500 text-xs italic">{message8}</p></div>
                <div id="fileUpload" className="max-w-md mt-2">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput id="file" name="passportDoc" onChange={handleFile}/>
    </div>
    <label className="flex justify-center font-sans mt-2">
      Gdrive
    </label>
                <div className="flex justify-center mt-1">
                 
                    <Link onClick={handleClick}><img src="https://th.bing.com/th/id/OIP.lgdmCc6UHAWc27h0o4tSbwHaHa?rs=1&pid=ImgDetMain" height="50" width="50"/></Link>
                </div>
                <div className="flex justify-center mt-6 mb-4">
                <div className=""><p className="text-red-500 text-sm">{passportData.message}</p></div>
                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-5 rounded" type="submit">
                    Verify
                </button>
                </div>
            </form> 
        </div>
        <Footer/>
    </div>
)
}
export default Verification;