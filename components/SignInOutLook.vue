<template>

    <div class="maincontainer bg-light">
        <div>
            <div class="signinform">
                <!-- sign in form -->
                    
                <slot name="form"/>
                
                <!-- sign in form -->
            </div>
        </div>
        <div >
            <div class="image p-5" style="background: linear-gradient(124deg, rgba(122, 165, 191, 0.6) -1.8%, rgba(69, 105, 135, 0.6) 105.23%);">

                <slot name="image"/>

            </div>
        </div>
    </div>
</template>

<style scoped>

.maincontainer{
    width:100vw;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:10px;
    
   
}
.maincontainer>div{
   width: 50%;
}
.maincontainer>div:nth-child(1)>div{
    margin-left: auto;
    margin-right: auto;
    margin-top: 12vh;
}
.maincontainer>div:nth-child(2){
    overflow: hidden;
    padding: 10px;
    
}
.image{
   width: 100%;
   height: 100%;
   border-radius: 7px;
}
@media screen and (max-width:750px) {

    .maincontainer>div:nth-child(2){
        display: none;
    }
    .maincontainer{
       width: 100vw;
       overflow-x: hidden;
       flex-direction: column;
       justify-content: center; 
    }

}
</style>