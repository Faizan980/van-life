// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

// const firebaseConfig = {
//   apiKey: "AIzaSyDde4dPoKhFW_sD2PPKiCWWldBmykjLLjA",
//   authDomain: "vanlife-bb509.firebaseapp.com",
//   projectId: "vanlife-bb509",
//   storageBucket: "vanlife-bb509.appspot.com",
//   messagingSenderId: "67500803281",
//   appId: "1:67500803281:web:8771a863649ce44825b1f0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

// // Refactoring the fetching function below

// const vansCollectionRef = collection(db, "vans")

// export async function getVans() {
//     const snapshot = await getDocs(vansCollectionRef)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans
// }

function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}