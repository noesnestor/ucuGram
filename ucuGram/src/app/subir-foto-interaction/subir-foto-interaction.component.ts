import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-subir-foto-interaction',
  templateUrl: './subir-foto-interaction.component.html',
  styleUrls: ['./subir-foto-interaction.component.css']
})
export class SubirFotoInteractionComponent implements OnInit {

  constructor(private fb : FormBuilder, private postService : PostService) { }

  addPost : FormGroup = this.fb.group({
    postImage : [null, [Validators.required]],
    postDescription : [null, [Validators.required]]
  })

  ngOnInit(): void {
  }

  uploadedImage?: File;

  public onImageUpload(event :any) {
    this.uploadedImage = event.target.files[0];
  }

  getDescription(){
    return this.addPost.get('postDescription') as FormControl;
  }


  imageUploadAction() {
    const imageFormData = new FormData();
    if(this.uploadedImage)
    {
      imageFormData.append('image', this.uploadedImage);
      imageFormData.append('alt', this.getDescription().value);
      this.postService.addPost(imageFormData).subscribe();
    }
  }

}
