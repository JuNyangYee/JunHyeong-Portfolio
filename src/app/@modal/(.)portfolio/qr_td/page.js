import Modal from "@/components/modal/modal";
import Data from "@/app/api/posts/qr_td"

export default async function QrSystem({params}) {
    return (
        <Modal
            info={Data.info}
            contents={Data.contents}
            imgData={Data.imgData}
        />
    );
}