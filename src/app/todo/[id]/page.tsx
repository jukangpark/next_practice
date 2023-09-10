interface PageProps {
  params: {
    id: string;
  };
}

// <PageProps>: 제네릭 타입을 통해 컴포넌트의 props 타입을 지정합니다.

/* 
  제네릭을 사용하면 타입을 매개변수로 취급하여 코드의 재사용성을 높이고, 
  동시에 다양한 타입에 대응하면서 타입의 안전성을 유지할 수 있습니다. 
  이는 TypeScript와 같은 타입 시스템을 가진 언어에서 매우 중요한 기능 중 하나입니다.
*/

const Page = ({ params }: PageProps) => {
  return <div>{params.id}</div>;
};

export default Page;
