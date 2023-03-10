const API_URL='http://localhost:8000' 
async function httpGetPlanets() {

 const res=   await fetch(`${API_URL}/planets`)
  return res.json()
 // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const res=await fetch(`${API_URL}/launches`)
  const fetchedlaunches= await res.json()
  return fetchedlaunches.sort((a,b)=>{
    return a.flightNumber-b.flightNumber
  })
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};