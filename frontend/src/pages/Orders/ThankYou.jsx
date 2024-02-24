import { Link } from "react-router-dom"
import { Header } from "../../layouts"

const ThankYouPage = () => {
    return (
        <div>
            <Header />
            <div className="flex-col-center">
                <div className="thank-pg__img-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/825/825561.png" alt="" />
                </div>
                <div className="text-center">
                    <div className="mb-2">
                        <h1 className="text-xxl font-bold">Thank you for shopping.</h1>
                    </div>
                    <div>
                        <p>If you have any issues contact us</p>
                    </div>
                    <div className="my-5">
                        <Link to={"/"}>
                            <button className="btn btn-primary ">Back Home</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ThankYouPage