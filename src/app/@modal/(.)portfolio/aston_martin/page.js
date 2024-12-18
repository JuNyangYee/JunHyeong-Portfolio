import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/aston_martin"

export default async function AstonMartin({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}