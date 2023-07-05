import Swal from "sweetalert2";

export default async (type, message) => {
    // type: success, info, warning, error
    const background = type === "success" ? "#2dce89" : "#f5365c";
   
    if(type === "warning") {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    } else if(type === "error") {
        Swal.fire({
            timer: 2000,
            toast: true,
            position: 'top-end',
            background: background,
            showConfirmButton: false,
            showCloseButton: true,
            html: `<span style="color: white">${message}</span>`,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    } else {
        Swal.fire({
            timer: 1000,
            title: 'Success',
            html: `<span >${message}</span>`,
            icon: 'success',
            showConfirmButton: false,
        })
    }
   


}
