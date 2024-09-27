import ClipLoader from "react-spinners/CircleLoader";
import PulseLoader from "react-spinners/PulseLoader";
const override = {
    display: 'block'
}

const Spinner = ({ loading }) => {
    return (
        <>
            <div className="absolute top-0 bottom-0 right-0 left-0 mt-[-1.75rem] mb-[-3rem] md:m-[-2.5rem] rounded-md bg-gradient-to-r from-gray-400 to-gray-500 opacity-15"></div>
            <div className="absolute top-0 bottom-0 right-0 left-0 m-[-2.5rem] grid place-items-center">
                <ClipLoader
                    color="#4338ca"
                    loading={loading}
                    cssOverride={override}
                    size={150}
                />
            </div>
        </>
    )
}

const Pulse = ({ loading }) => {
    return (
        <>
            <div className="absolute top-0 bottom-0 right-0 left-0 mt-[-1.75rem] mb-[-3rem] md:m-[-2.5rem] rounded-md bg-gradient-to-r from-gray-400 to-gray-500 opacity-15"></div>
            <div className="ml-3">
                <PulseLoader
                    color="#1d4ed8"
                    loading={loading}
                    cssOverride={override}
                    size={8}
                />
            </div>
        </>
    )
}

export { Spinner, Pulse }