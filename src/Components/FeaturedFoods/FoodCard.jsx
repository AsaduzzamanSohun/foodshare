import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FoodCard = ({ loadedFood }) => {
    

    const { _id, food_image, food_name, quantity, location, expired_date, notes, donar_name, donar_image } = loadedFood;


    return (
        <div className="lg:max-w-sm border bg-green-50 border-green-500 ">
            <div className="overflow-hidden cursor-pointer">
                <img src={food_image}
                    className="hover:scale-110 duration-500 h-60 w-full" alt="" />
            </div>

            <div className=" ">
                <div className="relative mb-7 ">
                    <div className="px-4 py-2 mb-4">
                        <div className="space-y-2">
                            <div className="absolute -top-2/3 lg:right-28 xl:right-40 rounded-full border-4 border-green-500 overflow-hidden cursor-pointer">
                                <img
                                    className="w-16 h-16 mx-auto hover:scale-125 duration-700" src={donar_image} alt="" />
                            </div>
                            <div className="lg:text-center relative top-7">
                                <p className="font-semibold text-lg">{donar_name}</p>
                                <p className="text-xs text-green-600 font-semibold">Donator</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t-2 text-green-600 border-green-800">
                    <div className=" space-y-2">
                        <div className="flex justify-between items-center text-sm">
                            <p>Expire:- <span>{expired_date}</span> </p>
                            <p>Quantity:- <span>{quantity}</span></p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold">{food_name}</h2>
                            <p className="text-sm">{notes}</p>
                        </div>

                    </div>

                    <div className="mt-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-sm">
                                <CiLocationOn className="text-slate-800" />
                                <p className="text-xs">{location}</p>
                            </div>
                            <div>

                                <Link to={`/details/${_id}`} className="">
                                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 font-medium text-neutral-50"><span className="absolute h-0 w-0 rounded-full bg-emerald-700 transition-all duration-300 group-hover:h-56 group-hover:w-36"></span><span className="relative">View Details</span></button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

FoodCard.propTypes = {
    loadedFood: PropTypes.object
}