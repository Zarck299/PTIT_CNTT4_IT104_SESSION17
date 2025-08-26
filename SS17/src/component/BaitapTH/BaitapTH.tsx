import {useState} from 'react'
type Job = {
    id: number,
    name: string,
    completed: boolean
}
type Jobs = {
    jobs: Job[]
}
export default function BaitapTH() {
    const[jobs, setJob] = useState<Jobs>({jobs: [
        {id: 1, name: 'Học lập trình', completed: false},
        {id: 2, name: 'Đi chơi', completed: true},
        {id: 3, name: 'Ngủ', completed: false}
    ]});
  return (
    <div>
      <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center
                    h-100">
                    <div class="col col-xl-10">
                        <div class="card">
                            <div class="card-body p-5">
                                <h3 style="text-align: center; margin-bottom:
                                    40px;">Quản lý công việc</h3>
                                <form class="d-flex justify-content-center
                                    align-items-center mb-4">
                                    <div class="form-outline flex-fill">
                                        <input type="text" id="form2"
                                            class="form-control" />
                                        <label class="form-label" for="form2">Thêm
                                            công việc</label>
                                    </div>
                                    <button type="submit" class="btn btn-info
                                        ms-2">Thêm</button>
                                </form>

                                <!-- Tabs navs -->
                                <ul class="nav nav-tabs mb-4 pb-2" id="ex1"
                                    role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active">Tất cả công
                                            việc</a>
                                    </li>
                                </ul>
                                <!-- Tabs navs -->

                                <!-- Tabs content -->
                                <div class="tab-content">
                                    <div class="tab-pane fade show active">
                                        <ul class="list-group mb-0">
                                            <li class="list-group-item d-flex
                                                align-items-center border-0 mb-2
                                                rounded justify-content-between"
                                                style="background-color:
                                                #f4f6f7;">
                                                <div>
                                                    <input
                                                        class="form-check-input
                                                        me-2" type="checkbox"
                                                        checked />
                                                    <s>Cras justo odio</s>
                                                </div>
                                                <div>
                                                    <a href="#!"
                                                        class="text-info"
                                                        title="Sửa công việc"><i
                                                            class="fas
                                                            fa-pencil-alt
                                                            me-3"></i>
                                                    </a>
                                                    <a href="#!"
                                                        class="text-danger"
                                                        title="Xóa công việc"><i
                                                            class="fas
                                                            fa-trash-alt"></i>
                                                    </a>
                                                </div>
                                            </li>
                                            <li class="list-group-item d-flex
                                                align-items-center border-0 mb-2
                                                justify-content-between"
                                                style="background-color:
                                                #f4f6f7;">
                                                <div>
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"/>
                                                    Cras justo odio
                                                </div>
                                                <div>
                                                    <a href="#!"
                                                        class="text-info"
                                                        title="Sửa công việc"><i
                                                            class="fas
                                                            fa-pencil-alt
                                                            me-3"></i>
                                                    </a>
                                                    <a href="#!"
                                                        class="text-danger"
                                                        title="Xóa công việc"><i
                                                            class="fas
                                                            fa-trash-alt"></i>
                                                    </a>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <!-- Tabs content -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
