import Modal from "@/components/modal/modal";
import Page from "@/app/posts/test";

export default function WorkTest() {
    return (
        <Modal
            info={Page.info}
            contents={Page.contents}
            imgData={Page.imgData}
        />
    );
}