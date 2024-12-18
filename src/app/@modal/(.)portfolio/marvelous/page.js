import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/marvelous"

export default async function Marvelous({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}