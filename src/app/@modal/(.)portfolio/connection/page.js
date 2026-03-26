import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/connection"

export default async function Connection({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}