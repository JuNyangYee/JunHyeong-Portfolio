import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/way"

export default async function Way({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}