import React, { Suspense } from "react"
import { Link, useLoaderData, Await, defer } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

/**
 * Challenge: Implement defer, Await, and Suspense in the
 * /host/vans route.
 */

export function loader({ request }) {
    // await requireAuth({request})
    return defer({vans: getHostVans()})
}

export default function HostVans() {
    const vansDeferred = useLoaderData()
    console.log('vansDeferred in host', vansDeferred)

    const hostVansEls = vans => vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                <section>
                    <Suspense fallback="loading..."> 
                        <Await resolve={vansDeferred.vans}>
                            {hostVansEls}
                        </Await>
                    </Suspense>
                </section>
            </div>
        </section>
    )
}