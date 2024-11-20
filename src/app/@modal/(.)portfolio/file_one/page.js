import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/file_one"

export default async function WorkTest({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}