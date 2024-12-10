import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/fungi"

export default async function Fungi({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}