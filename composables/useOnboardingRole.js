

export default  useOnboardingRole=async()=>{
    try{
        const data = await useFetch("/api/onboarding/add-role");
        const res = data.data;
        return res.value;
    }
    catch(err){
        return ({error:err.message})
    }
}