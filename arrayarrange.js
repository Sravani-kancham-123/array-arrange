let arr= [1,2,3,4,5,6,7,8,9];
let temp=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<=i;j++)
    {
        if(arr[i]%2==0) {
        
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("array after arranged");
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}