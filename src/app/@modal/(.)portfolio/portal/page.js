import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/portal"

export default async function Portal({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}