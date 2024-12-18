import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/hyperconnection"

export default async function HyperConnection({params}) {

    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}