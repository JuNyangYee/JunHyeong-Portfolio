import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/blue_dot"

export default async function BlueDot({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}