
//signup에 관련된 api요청코드만 분리해서 모아놓은파일
export const signupRequst=async(formData)=>{
    const url="http://localhost:8080/api/auth"
    const init={
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }
  const response=await fetch(url, init);
  return response.json();
}
