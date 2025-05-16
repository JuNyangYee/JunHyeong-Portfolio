const Page = {
    info: {
        title: "Unreal Engine Style Guide",
        date: "2025. 03 ~ ",
        about: "언리얼엔진 작업용 스타일 가이드 문서를 작성했습니다.",
        thumbnail: "/images/works/UeStyleGuide/UeStyleGuide_Thumbnail.png",
        tags: ["Documentation", "Unreal Engine", "Guide"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: true,
        fab_blog_url: "https://junyangyee.github.io/Works/UE_StyleGuide/",
        fab_video: false,
        fab_video_url: "",
        fab_link: true,
        fab_link_url: "https://junyangyee.notion.site/ue-styleguide-junyangyee?pvs=4",
    },

    imgData: [
        {
            index: 1,
            title: "스타일 가이드 문서 01",
            url: "/images/works/UeStyleGuide/UeStyleGuide_001_Top.png",
            alt: "StyleGuide01"
        },
        {
            index: 2,
            title: "스타일 가이드 문서 02",
            url: "/images/works/UeStyleGuide/UeStyleGuide_002_Coding.png",
            alt: "StyleGuide02"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                원활한 유지 보수 및 협업을 위하여 언리얼엔진 작업 시 볼 수 있는 스타일 가이드 문서를 작성했습니다.<br />
                특히 협업 시 발생할 수 있는 문제들을 최대한 방지하기 위해, 쉽게 꼬일 수 있는 부분들을 명확히 하고자 했습니다.
            </p>

            <hr />

            <h3>작업 내용</h3>

            <p>
                Notion을 기반으로 문서를 작성했습니다.<br />
                구글 문서, 옵시디언 등 다양한 방안이 있었으나, 가독성 및 공유 측면에서 노션이 가장 효과적으로 사용할 수 있을 것으로 예상했습니다.
            </p>

            <p>
                <strong>정보 가독성</strong><br />
                필요한 정보가 있을 때 빠르게 해당 정보를 찾을 수 있도록, 헤더 기반으로 자동으로 목차가 생성되는 부분을 최대한 이용했습니다. 헤더 블록끼리 정보가 섞이지 않도록 블록에 맞게 간결하게 정보를 작성했으며, 불가피하게 정보가 섞일 경우 역링크를 걸어 정보 확인이 용이하게 했습니다.
            </p>

            <p>
                <strong>명확한 표준</strong><br />
                파일/폴더가 꼬이는 일이 예외가 많아질 때 많이 발생한다 생각합니다.<br />
                최대한 예외가 없이 명확하게 표준을 작성하려고 했으며, 케이싱 규칙부터 네이밍, 폴더 구조 등 사소한 내용부터 디테일한 내용까지 최대한 작성했습니다. 해당 표준들은 다양한 가이드 · 표준 문서들을 찾아보며 최대한 기본 표준에 가깝게 작성하였습니다.
            </p>

            <hr />

            <h3>여담</h3>

            <p>
                지금까지 작업을 해오면서 스타일 가이드에 대한 필요성을 느꼈습니다. <br />
                개인 작업을 할 때에는 꽤 깔끔하게 저만의 표준이 있다고 생각했었지만, 할 때마다 폴더구조나 이름이 조금씩 달라지기도 했고, 특히 다른 사람들이 작업한 파일을 열어보거나 협업을 할 경우에 중구난방으로 되어있는 경우가 많았습니다. <br />
                이렇게 작성을 하다보니 예전에 작업할 때 얼마나 대충이었는지도 파악이 되었고, 추후 작업물 관리에도 유용하게 쓰일 수 있다 생각합니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Notion</strong><br />
                    노션을 기반으로 문서 작성을 진행했습니다.<br />
                    문서 공유 및 내용 업데이트에 용이하다고 판단했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;