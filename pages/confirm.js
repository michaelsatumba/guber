import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map.js'
import { useRouter } from "next/router"
import RideSelector from './components/RideSelector.js'
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()
    
    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token:"pk.eyJ1IjoibWljaGFlbHNhdHVtYmFtYXBzIiwiYSI6ImNrdm15Z204YjAzajIyb3F2YWRkcjFuaWQifQ.X0jvoZunwGoLmk00y6CNog",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
          setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token:"pk.eyJ1IjoibWljaGFlbHNhdHVtYmFtYXBzIiwiYSI6ImNrdm15Z204YjAzajIyb3F2YWRkcjFuaWQifQ.X0jvoZunwGoLmk00y6CNog",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(() => {
      getPickupCoordinates(pickup);
      getDropoffCoordinates(dropoff);
        }, [pickup, dropoff])

    return (
        <Wrapper>

        <ButtonContainer>
            <Link href="/search">
               <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/> 
               </Link>
        </ButtonContainer>


        <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
        />

        <RideContainer>

            <RideSelector />

            <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm UberX
            </ConfirmButton>
            </ConfirmButtonContainer>
           
        </RideContainer>

        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen
`
const ButtonContainer = tw.div`
bg-red-600 px-4 rounded-full flex-1/2
`

const BackButton = tw.img`
h-12 rounded-full transform hover:scale-105 transition cursor-pointer
`

const RideContainer = tw.div`
flex-1 p-4 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4 py-4 text-xl transform hover:scale-105 transition cursor-pointer
`