import * as firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

import config from "../config/Firebase"

// Initialize Firebase.
firebase.initializeApp(config)