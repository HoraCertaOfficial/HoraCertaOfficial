import { Controller, Get, Put, Body, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user: {
    uid: string;
  };
}

interface UpdateProfileDto {
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @UseGuards(AuthGuard('firebase'))
  async getProfile(@Req() req: RequestWithUser) {
    const userId = req.user.uid;
    return this.usersService.getProfile(userId);
  }

  @Put('profile')
  @UseGuards(AuthGuard('firebase'))
  async updateProfile(
    @Req() req: RequestWithUser,
    @Body() updateProfileDto: UpdateProfileDto
  ) {
    const userId = req.user.uid;
    return this.usersService.updateProfile(userId, updateProfileDto);
  }
}
