const Page = {
    info: {
        title: "제목",
        date: "2024. 08. 25 ~ 진행중",
        about: "작품설명 두 줄 정도 \n이 작업은 어떤 어떤 걸 진행한 작업입니다.",
        thumbnail: "/images/works/test/TestTitleImg.jpg",
        tags: ["Tech", "Art", "Unreal Engine"],
        fab_blog: true,
        fab_video: true,
        fab_link: true
    },

    imgData: [
        {
            index: 1,
            title: "배경화면",
            url: "/images/works/test/TestImage.jpg",
            alt: "test"
        },
        {
            index: 2,
            title: "다른화면",
            url: "/images/works/test/TestImage.jpg",
            alt: "test"
        },
    ],

    contents: (
        <div>
            <h1>📌 헤더 제목 1</h1>
            <p>
                이건 좀... <br />
                아무래도 이건 행간을 보기위해 만든...
            </p>
            <ul>
                <li>이건 뭐지</li>
                <li>리스트구나!</li>
                <ol>
                    <li>근데 되게 복잡스럽네.</li>
                </ol>
            </ul>
            <h2>📌 헤더 제목 2</h2>
            <p>
                이건 좀... <br />
                아무래도 이건 행간을 보기위해 만든...
            </p>
        </div>
    )
}

export default Page;

// export default function Test() {
//     return (
//         <Modal
//             info={Page.info}
//             contents={Page.contents}
//             imgData={Page.imgData}
//         />
//     );
// };