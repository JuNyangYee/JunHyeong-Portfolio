import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/portfolio"

export default function Portfolio({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}