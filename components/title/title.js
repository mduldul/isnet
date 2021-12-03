import { Row } from "@nextui-org/react"

const Title = ({ TitleText, props }) => {
    return (
        <Row className="lg:pt-5">
            <span className="text-featureTextBlue font-bold text-3xl font-Montserrat ml-4 lg:after:w-10/12 lg:after:bg-gray-200 lg:after:h-1 lg:after:absolute lg:after:mt-3 after:ml-8" {...props}>{TitleText}</span>
        </Row>
    )
}

export default Title
