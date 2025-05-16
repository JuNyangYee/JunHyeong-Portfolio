import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/ue_styleguide"

export default async function UeStyleGuide({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}